import ProfileTemplate, { ProfileData } from './ProfileTemplate';

export default function SalehAlhashmi() {
  const data: ProfileData = {
    name: "Saleh",
    surnameItalic: "Alhashmi",
    roleLine: "Senior Associate & Head of Middle East Operations. A business executive, project management professional, and technology entrepreneur with more than 20 years of leadership experience across the oil and gas industry and emerging digital sectors.",
    initials: "SA",
    quickFacts: [
      "Co-Founder & CEO — Power AI Artificial Intelligence LLC",
      "Experience — 20+ years in Oil & Gas",
      "Certification — Project Management Professional (PMP®)",
      "Focus — Artificial Intelligence & Digital Solutions",
      "Markets — Middle East · UAE"
    ],
    aboutHeading: "A leadership profile shaped by project delivery and technology-led transformation.",
    pullQuote: "Strategic advisory requires credibility, judgement, and the ability to translate complex priorities into executable outcomes.",
    bioParagraphs: [
      "Saleh Alhashmi is a business executive, project management professional, and technology entrepreneur with more than 20 years of leadership experience in the oil and gas industry. Throughout his career, he has successfully led complex, high-value projects, driven strategic business initiatives, and delivered transformational programmes across multidisciplinary organisations.",
      "As the Co-Founder and CEO of Power AI Artificial Intelligence LLC, he is leading the company's vision to accelerate the adoption of artificial intelligence and innovative digital solutions across the region.",
      "Saleh holds a Bachelor of Science in Civil Engineering from California State University, Long Beach (USA) and a Master's Degree in Project Management from The British University in Dubai (UAE). He is also a certified Project Management Professional (PMP®), reflecting his commitment to internationally recognised standards of leadership and project excellence.",
      "As Head of Middle East Operations, Saleh anchors R&J Steytler's presence across the Gulf — connecting Namibian and African project priorities with Middle Eastern capital, technology partners, and institutional expertise."
    ],
    highlights: [
      {
        category: "Technology",
        title: "Power AI — Co-Founder & CEO",
        institution: "Power AI Artificial Intelligence LLC",
        text: "Leads the company's vision to accelerate adoption of AI and innovative digital solutions."
      },
      {
        category: "Energy",
        title: "20+ Years in Oil & Gas",
        institution: "Multidisciplinary organisations",
        text: "Led complex, high-value projects and delivered transformational programmes across the energy industry."
      },
      {
        category: "Project delivery",
        title: "PMP® Certified",
        institution: "Project Management Institute",
        text: "Internationally recognised standards of project leadership and engineering excellence."
      },
      {
        category: "Education",
        title: "MSc & BSc Engineering",
        institution: "British University in Dubai · CSU Long Beach",
        text: "Master's in Project Management and a BSc in Civil Engineering."
      }
    ]
  };

  return <ProfileTemplate profile={data} />;
}
