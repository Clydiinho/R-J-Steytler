import ProfileTemplate, { ProfileData } from './ProfileTemplate';

export default function JohnSteytler() {
  const data: ProfileData = {
    name: "Dr. John",
    surnameItalic: "Steytler",
    roleLine: "Chief Executive Officer & Co-Founder. Three decades of leadership across economic policy, development finance, and national strategy — spanning the IMF, the Bank of Namibia, and the Development Bank of Namibia.",
    initials: "JS",
    quickFacts: [
      "Former CEO — Development Bank of Namibia",
      "Experience — IMF Senior Economist",
      "Experience — Presidential Advisor (two presidents)",
      "Head of Monetary Policy — Bank of Namibia",
      "First Statistician-General — Republic of Namibia",
      "Bank of Namibia MPC Independent Member (2026–2029)"
    ],
    aboutHeading: "A leadership profile shaped by institutional experience and strategic advisory.",
    pullQuote: "Strategic advisory requires credibility, judgement, and the ability to translate complex priorities into executable outcomes.",
    bioParagraphs: [
      "Dr. John Steytler brings three decades of leadership across economic policy, development finance, and national strategy — spanning the IMF, the Bank of Namibia, and the Development Bank of Namibia.",
      "As Namibia's First Statistician-General, he established the national statistical framework that underpins economic planning to this day. As Head of Monetary Policy at the Bank of Namibia, he shaped the macroeconomic environment during a critical period of post-independence nation-building. In 2026, he was appointed the first independent member of the Bank of Namibia Monetary Policy Committee for a three-year term.",
      "He served as a senior economist at the International Monetary Fund, bringing global development finance experience and deep analytical rigour to Namibia's policy landscape. He served as advisor to two Namibian presidents, offering counsel on economic strategy, industrial policy, and national development planning.",
      "As CEO of the Development Bank of Namibia, Dr. Steytler led a landmark institutional turnaround — repositioning the bank as a credible development finance institution and securing access to over N$4 billion in Green Climate Fund financing for Namibia. He authored Namibia's Industrial Policy, the Growth at Home Strategy, and the Logistics Nation concept that underpins NDP4."
    ],
    highlights: [
      {
        category: "Development finance",
        title: "N$4bn+ Green Climate Fund",
        institution: "Development Bank of Namibia",
        text: "Secured Namibia's access to over N$4 billion in Green Climate Fund financing."
      },
      {
        category: "National strategy",
        title: "NDP4 Logistics Nation",
        institution: "Government of Namibia",
        text: "Authored the Logistics Nation concept that anchors Namibia's Fourth National Development Plan."
      },
      {
        category: "Industrial policy",
        title: "Industrial Policy Author",
        institution: "Government of Namibia",
        text: "Drafted Namibia's Industrial Policy and the Growth at Home Strategy."
      },
      {
        category: "Advisory",
        title: "Presidential Advisor",
        institution: "Office of the President",
        text: "Served as economic advisor to two successive Namibian presidents."
      },
      {
        category: "Monetary policy",
        title: "Head of Monetary Policy",
        institution: "Bank of Namibia",
        text: "Shaped the macroeconomic environment during a formative post-independence period."
      },
      {
        category: "Statistics",
        title: "First Statistician-General",
        institution: "Republic of Namibia",
        text: "Established the national statistical framework underpinning economic planning today."
      }
    ]
  };

  return <ProfileTemplate profile={data} />;
}
