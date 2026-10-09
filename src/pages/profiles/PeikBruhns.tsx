import ProfileTemplate, { ProfileData } from './ProfileTemplate';

export default function PeikBruhns() {
  const data: ProfileData = {
    name: "Peik",
    surnameItalic: "Bruhns",
    roleLine: "Senior Associate & Head of West African Operations. Three decades of leadership in MSME development, entrepreneurship ecosystems, and cross-border programme delivery across Africa.",
    initials: "PB",
    quickFacts: [
      "Experience — 30+ years leadership across Africa",
      "Regional reach — 17+ years across Southern, East & West Africa",
      "Nigeria programme — 26 implementing agencies",
      "15,000+ training beneficiaries · 5,000 registrations",
      "Academic — Systemic Organisational Development (SAAP/IODA)",
      "Studies — Political Sciences, Freie Universität Berlin"
    ],
    aboutHeading: "A profile shaped by three decades of MSME development and programme delivery.",
    pullQuote: "Sustainable MSME development is built one institution, one curriculum, and one trained team at a time.",
    quoteAuthor: "Peik Bruhns",
    bioParagraphs: [
      "Peik Bruhns is a Namibian/German development practitioner with more than 30 years' experience leading private sector development programmes for ethnically, culturally, and geographically diverse teams. He is founder and head of the Namibian Centre for Excellence in MSME and Start-up Development.",
      "Since 2020 he has led GIZ/GOPA entrepreneurship and e-commerce programmes in Nigeria and Rwanda, including the design of the ICSS (Inspire, Create, Start, Scale) entrepreneurship curriculum, a national Learning Management System, and Nigeria's Digital Transformation Centre supporting women- and youth-led MSMEs.",
      "His earlier work spans Sudan and South Sudan, Zambia, Zimbabwe, Ghana, Tanzania, Botswana, Mozambique, Angola, Malawi, and Afghanistan — delivering Results Based Monitoring systems, donor-funded institutional reform, and sustainable financing models for SME support bodies.",
      "At R&J Steytler, Peik leads the firm's West African operations. He holds a Master's-equivalent qualification in Systemic Organisational Development (SAAP/IODA) and studied Political Sciences at the Freie Universität Berlin. He is a member of the International Association of Science Parks (IASP) and the International Organisation Development Association (IODA), and is certified in Capacity WORKS."
    ],
    highlights: [
      {
        category: "Enterprise Curriculum",
        title: "ICSS Entrepreneurship Programme",
        institution: "GIZ / GOPA · Nigeria (2020–Present)",
        text: "Designed and rolled out the ICSS curriculum with 26 implementing agencies, reaching 15,000+ training beneficiaries and 5,000 business registrations."
      },
      {
        category: "Digital Transformation",
        title: "Digital Transformation Centre",
        institution: "Nigeria MSME Digital Skills",
        text: "Led the Digital Skills for Entrepreneurs (DSE) course and the MentHer digital mentorship network for women entrepreneurs."
      },
      {
        category: "E-Commerce",
        title: "RwandaMart E-Commerce Platform",
        institution: "Rwanda National Post",
        text: "Directed the review and finalisation of Rwanda's national e-commerce platform in partnership with the Rwanda National Post."
      },
      {
        category: "Centre of Excellence",
        title: "Centre for Excellence in MSME",
        institution: "Founder & Head · Namibia",
        text: "Founded and led Namibia's central entrepreneurship hub and research facility for MSME and start-up development."
      },
      {
        category: "Youth Empowerment",
        title: "Youth Leadership Development",
        institution: "Namibian Government Flagship",
        text: "Team Leader on a capacity-building programme reaching 500+ youth, recognised by the Namibian Government as a flagship initiative."
      },
      {
        category: "Regional Innovation",
        title: "FabLab & RLab Network",
        institution: "SADC Regional Innovation Support",
        text: "Oversaw the initial establishment of FabLab and RLab across Namibia, Botswana, South Africa, Zambia, and Mozambique."
      }
    ]
  };

  return <ProfileTemplate profile={data} />;
}
