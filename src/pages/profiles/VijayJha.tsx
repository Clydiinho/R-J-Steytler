import ProfileTemplate, { ProfileData } from './ProfileTemplate';

export default function VijayJha() {
  const data: ProfileData = {
    name: "Vijay",
    surnameItalic: "Jha",
    roleLine: "Chief Operating Officer & Co-Founder. A sharp operational mindset and a proven track record of building commercial platforms across infrastructure advisory, financial services, energy transition, and cross-border development.",
    initials: "VJ",
    quickFacts: [
      "Experience — Infrastructure & Energy Advisory",
      "Experience — Financial Services",
      "Experience — Aviation",
      "Focus — Energy Transition & BESS",
      "Markets — Africa · UAE · India"
    ],
    aboutHeading: "A leadership profile shaped by operational delivery and cross-border networks.",
    pullQuote: "Strategic advisory requires credibility, judgement, and the ability to translate complex priorities into executable outcomes.",
    bioParagraphs: [
      "Vijay Jha brings a sharp operational mindset and a proven track record of building commercial platforms across infrastructure advisory, financial services, energy transition, and cross-border development — spanning Africa, India, and international markets.",
      "With deep experience in the aviation and financial services sectors, Vijay has navigated complex commercial and regulatory environments across multiple jurisdictions. His cross-border networks across Africa, the UAE, and India position R&J Steytler as a credible bridge between Namibian sovereign priorities and international capital and expertise.",
      "As COO of R&J Steytler, Vijay leads the firm's energy transition and BESS (Battery Energy Storage System) initiatives in Namibia — a strategically significant portfolio as Namibia positions itself as a green energy hub. He drives operational delivery across the firm's project development and institutional partnership mandates, ensuring strategic intent translates into tangible outcomes.",
      "Vijay's engagement model is built on relationships — maintaining active connections with investors, developers, and government counterparts across the African continent and beyond."
    ],
    highlights: [
      {
        category: "Energy",
        title: "BESS & Energy Transition",
        institution: "R&J Steytler",
        text: "Leads Namibia's Battery Energy Storage System and energy transition initiatives."
      },
      {
        category: "Networks",
        title: "Cross-Border Development",
        institution: "Africa · UAE · India",
        text: "Active commercial networks across Africa, the UAE, and India."
      },
      {
        category: "Infrastructure",
        title: "Infrastructure Advisory",
        institution: "R&J Steytler",
        text: "Structuring and advancing infrastructure and industrial projects across Africa."
      },
      {
        category: "Finance",
        title: "Financial Services",
        institution: "International markets",
        text: "Background in financial services and aviation across international markets."
      }
    ]
  };

  return <ProfileTemplate profile={data} />;
}
