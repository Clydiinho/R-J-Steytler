import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { WebSocketServer } from "ws";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

  const wss = new WebSocketServer({ noServer: true });

  server.on('upgrade', (request, socket, head) => {
    if (request.url === '/ws') {
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
      });
    }
  });

  // Keep track of connected clients
  wss.on('connection', (ws) => {
    console.log('Client connected to live trading WebSocket');
    
    // Simulate real-time trading data
    const interval = setInterval(() => {
      // Create random price action
      const volatility = 4;
      const data = {
        type: 'TICK',
        changeY: (Math.random() - 0.5) * volatility,
        changeHeight: (Math.random() - 0.5) * volatility * 1.5,
        wickTopChange: (Math.random() - 0.5) * volatility,
        wickBottomChange: (Math.random() - 0.5) * volatility
      };
      
      if (ws.readyState === ws.OPEN) {
        ws.send(JSON.stringify(data));
      }
    }, 800);

    ws.on('close', () => {
      clearInterval(interval);
      console.log('Client disconnected from WebSocket');
    });
  });
}

startServer();
