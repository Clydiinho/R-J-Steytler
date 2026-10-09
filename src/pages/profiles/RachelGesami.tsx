import ProfileTemplate, { ProfileData } from './ProfileTemplate';

export default function RachelGesami() {
  const data: ProfileData = {
    name: "Prof. Rachel K.",
    surnameItalic: "Gesami",
    roleLine: "Senior Associate & Head of East Africa Operations. Economist, scholar, and public servant — an architect of institutional transformation with more than four decades across academia, the Government of Kenya, and the International Monetary Fund.",
    initials: "RG",
    quickFacts: [
      "Doctorate — PhD in Economics, University of Nairobi (2000)",
      "Master's — MSc Health Management, Economics, Planning & Policy, Leeds",
      "Executive — Strategic Management & Policy Analysis, Harvard University",
      "National honour — Moran of the Burning Spear (MBS), Kenya, 2009",
      "Based in — Nairobi · East Africa Practice"
    ],
    aboutHeading: "A career at the intersection of scholarship and public service.",
    pullQuote: "Education and sound institutions remain the most powerful instruments for transforming societies.",
    quoteAuthor: "Prof. Rachel K. Gesami",
    bioParagraphs: [
      "Professor Rachel K. Gesami is a distinguished African economist whose career spans more than forty years of scholarship, leadership, and public service. Her work bridges academia, government, and international institutions, positioning her among the leading voices in development economics and policy dialogue across the continent.",
      "From her early contributions in Kenya's public health sector, to her leadership at the International Monetary Fund in Washington D.C., to her distinguished academic career shaping universities and research institutions across Africa, Professor Gesami has consistently demonstrated intellectual leadership and moral clarity.",
      "Her scholarship has addressed critical themes in development economics, including healthcare financing, poverty reduction, financial governance, and institutional reform. She has supervised more than thirty master's theses and several doctoral dissertations, with many of her former students now holding leadership positions in universities, governments, and international institutions.",
      "At R&J Steytler, Professor Gesami leads the firm's East Africa operations, bringing decades of institutional knowledge and a deep network across ministries of finance, central banks, and development partners to bear on strategic mandates across the region."
    ],
    highlights: [
      {
        category: "Multilateral Advisory",
        title: "Senior Advisor, Anglophone Africa",
        institution: "International Monetary Fund, Washington D.C. (2003–2008)",
        text: "Advised governments on macroeconomic policy, structural reforms and financial governance; contributed to the World Economic Outlook and Global Monitoring Reports."
      },
      {
        category: "Government Leadership",
        title: "Secretary for Policy Coordination",
        institution: "Office of the Prime Minister, Kenya (2009–2013)",
        text: "Aligned cross-ministerial policy initiatives and served as Director within the Vision 2030 long-term national development strategy."
      },
      {
        category: "Executive Governance",
        title: "Permanent Secretary",
        institution: "Ministry of Cooperative Development, Kenya (2003)",
        text: "Oversaw national cooperative policy, agricultural financing systems, and economic empowerment initiatives."
      },
      {
        category: "Higher Education",
        title: "Deputy Vice-Chancellor, Academic Affairs & Research",
        institution: "Catholic University of Eastern Africa (2019–2023)",
        text: "Strengthened academic governance and quality assurance systems; launched an Innovation Hub for research collaboration and knowledge transfer."
      },
      {
        category: "Academic Leadership",
        title: "Dean, School of Business & Economics",
        institution: "Kenya Methodist University (2015–2016)",
        text: "Founded the Centre for Development, Research and Outreach, strengthening research capacity and international partnerships."
      },
      {
        category: "Research Foundation",
        title: "Executive Director & Founder",
        institution: "Social Economic Research Foundation · Cennet Institute (2024–Present)",
        text: "Founder and Director of Cennet Technology & Management Training Institute and Cennet International Schools (est. 2025)."
      }
    ],
    timeline: [
      { year: "1981", title: "Bachelor of Arts in Economics and Sociology", desc: "University of Botswana and Swaziland." },
      { year: "1981–1993", title: "Economist, Ministry of Health, Kenya", desc: "Contributing to health sector planning and management reforms." },
      { year: "1982–1983", title: "Advanced Diploma in Administration and Management", desc: "Kenya Institute of Administration." },
      { year: "1990", title: "Master's Degree in Health Management, Economics, Planning & Policy", desc: "University of Leeds, United Kingdom." },
      { year: "1993–1999", title: "Manager, HR and Administration", desc: "African Economic Research Consortium (AERC)." },
      { year: "2000", title: "PhD in Economics", desc: "University of Nairobi, Kenya." },
      { year: "2000–2002", title: "Manager, External Liaison and Dissemination", desc: "African Economic Research Consortium." },
      { year: "2003", title: "Permanent Secretary", desc: "Ministry of Cooperative Development, Government of Kenya." },
      { year: "2003–2008", title: "Senior Advisor for Anglophone Africa", desc: "International Monetary Fund, Washington D.C." },
      { year: "2009", title: "Moran of the Burning Spear (MBS)", desc: "Awarded by the President of Kenya for distinguished national service." },
      { year: "2009–2013", title: "Secretary for Policy Coordination", desc: "Office of the Prime Minister, Government of Kenya." },
      { year: "2015–2016", title: "Dean, School of Business and Economics", desc: "Kenya Methodist University." },
      { year: "2018", title: "Appointed Associate Professor of Economics", desc: "Catholic University of Eastern Africa." },
      { year: "2019–2023", title: "Deputy Vice-Chancellor for Academic Affairs and Research", desc: "Catholic University of Eastern Africa." },
      { year: "2022", title: "Promoted to Professor of Economics", desc: "Catholic University of Eastern Africa." },
      { year: "2024", title: "Executive Director", desc: "Social Economic Research Foundation." },
      { year: "2025", title: "Founder and Director", desc: "Cennet Technology & Management Training Institute and Cennet International Schools." }
    ],
    expertiseTags: [
      "Development Economics",
      "Health Economics & Financing",
      "Poverty & Inequality",
      "Institutional Governance",
      "Financial Systems & Regulation",
      "Public Policy in Africa"
    ],
    publications: [
      { num: 1, citation: "Research Methods: Examining Research Techniques. AMECEA Gaba Publications – CUEA Press, Nairobi (2022)." },
      { num: 2, citation: "Health Care Financing in Kenya: An Empirical Analysis. University of Nairobi Press (2000)." },
      { num: 3, citation: "Decentralization: A Prerequisite for Healthcare Management and Implementation of Primary Healthcare in Kenya. University of Leeds Press (1990)." },
      { num: 4, citation: "Gesami, R. & Steytler, J. (2004). The Macroeconomic Implications of HIV/AIDS in Sub-Saharan Africa. International Monetary Fund." },
      { num: 5, citation: "Gesami, R., Mamba, B., Masawe, J., Nintunze, D. & Steytler, J. (2004). Regional Integration in Sub-Saharan Africa: East African Community Customs Union. International Monetary Fund." },
      { num: 6, citation: "Gesami, R. & Fosu, A. (2000). Poverty, Inequality and Intra-household Allocation Issues in Sub-Saharan Africa. Journal of African Economies." },
      { num: 7, citation: "Wang'ombe, J. & Gesami, R. (1997). Health Service Pricing Reforms in Kenya. International Journal of Social Economics." },
      { num: 8, citation: "Gesami, R., Mwabu, G. & Nganda, B. (2002). The Economic Burden of Malaria in Kenya. African Economic Research Consortium." }
    ],
    closingQuote: "Universities must function not only as centres of learning, but as institutions that shape ethical leadership and public responsibility. — Prof. Rachel K. Gesami"
  };

  return <ProfileTemplate profile={data} />;
}
