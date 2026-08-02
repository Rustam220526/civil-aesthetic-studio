export type Project = {
  title: string;
  category: string;
  year: string;
  summary: string;
  overview: string;
  approach: string;
  outcomes: string[];
  tools: string[];
};

export const projects: Project[] = [
  {
    title: "Smart Traffic and Mobility Analysis",
    category: "Transportation Engineering",
    year: "2024",
    summary:
      "Uses IoT sensors and data tools to study urban congestion and plan safer roads for Indian cities.",
    overview:
      "A data-driven study of urban traffic patterns using IoT sensor data to identify congestion hotspots and propose safer, more efficient road designs for Indian metropolitan areas.",
    approach:
      "Collected real-time traffic volume, speed, and incident data from IoT sensors. Analyzed peak-hour congestion patterns and correlated them with road geometry, intersection design, and pedestrian movement.",
    outcomes: [
      "Mapped high-congestion corridors with 85% spatial accuracy",
      "Proposed signal-timing and lane-width improvements for key intersections",
      "Recommended safer pedestrian crossings and dedicated cycle lanes",
    ],
    tools: ["Python", "GIS", "Excel", "MATLAB"],
  },
  {
    title: "Recycled Plastic in Flexible Pavements",
    category: "Pavement Engineering",
    year: "2024",
    summary:
      "Tests the strength and cost benefits of mixing shredded plastic waste into asphalt road layers.",
    overview:
      "An experimental investigation into using shredded plastic waste as a partial aggregate replacement in flexible pavement bituminous mixes.",
    approach:
      "Prepared Marshall specimens with varying plastic content percentages. Tested stability, flow, density, and air voids to determine optimum binder content and mix performance.",
    outcomes: [
      "Improved Marshall stability by up to 15% with 8% plastic content",
      "Reduced bitumen requirement and overall material cost",
      "Demonstrated a viable waste-management pathway for plastic refuse",
    ],
    tools: ["Marshall Stability Apparatus", "Bitumen Testing", "Excel", "AutoCAD"],
  },
  {
    title: "Seismic Vulnerability and Retrofitting",
    category: "Structural Analysis",
    year: "2023",
    summary:
      "Analyzes multi-story concrete structures using software like ETABS to design steel bracings or shear walls for earthquake safety.",
    overview:
      "Seismic performance assessment of a multi-story reinforced concrete frame and design of retrofit measures using steel bracing and reinforced concrete shear walls.",
    approach:
      "Modeled the existing building in ETABS, performed response spectrum analysis, identified weak stories and torsional irregularities, then designed steel X-bracing and shear-wall upgrades.",
    outcomes: [
      "Reduced inter-story drift by 30% with added shear walls",
      "Improved lateral load resistance by approximately 40%",
      "Prepared retrofit drawings and a detailed cost estimate",
    ],
    tools: ["ETABS", "AutoCAD", "Excel", "IS 1893"],
  },
  {
    title: "BIM for Construction Management",
    category: "Construction Management",
    year: "2023",
    summary:
      "Applies digital 3D modeling to track material waste, cut costs, and optimize timelines on building sites.",
    overview:
      "A Building Information Modeling study to improve construction site management through clash detection, automated quantity takeoffs, and 4D construction scheduling.",
    approach:
      "Developed a detailed 3D model of a mid-rise building, performed clash detection between structural and MEP elements, extracted BOQ, and linked model components to construction schedules.",
    outcomes: [
      "Identified and resolved 12 major clashes before construction",
      "Reduced estimated material waste by 18% through accurate quantity takeoffs",
      "Optimized construction timeline through 4D simulation and sequencing",
    ],
    tools: ["Revit", "Navisworks", "AutoCAD", "MS Project"],
  },
  {
    title: "Low-Cost Wastewater Treatment Systems",
    category: "Environmental Engineering",
    year: "2022",
    summary:
      "Focuses on decentralized sewage treatment, biochar filters, and greywater recycling for local communities.",
    overview:
      "Design of a decentralized, low-cost wastewater treatment system using biochar filters and greywater recycling for rural and peri-urban communities.",
    approach:
      "Characterized influent wastewater quality, designed horizontal subsurface-flow constructed wetlands with biochar media, and evaluated treated-water reuse potential for irrigation.",
    outcomes: [
      "Achieved 75% BOD and COD reduction in pilot-scale tests",
      "Produced reusable greywater meeting local irrigation standards",
      "Estimated 40% lower lifecycle cost than conventional sewage treatment plants",
    ],
    tools: ["Water Quality Testing Kits", "Excel", "AutoCAD", "EPA SWMM"],
  },
];

export const skills = [
  {
    title: "Structural Analysis",
    description:
      "Design and analyze load-bearing systems using modern methods and industry-standard software.",
  },
  {
    title: "Infrastructure Design",
    description:
      "Plan roads, bridges, and utilities with attention to safety, longevity, and community impact.",
  },
  {
    title: "AutoCAD & BIM",
    description:
      "Produce precise technical drawings and building information models for complex projects.",
  },
  {
    title: "Project Management",
    description:
      "Coordinate timelines, budgets, and stakeholders to deliver projects on scope and on schedule.",
  },
  {
    title: "Site Supervision",
    description:
      "Oversee construction operations with a focus on quality control, safety, and regulatory compliance.",
  },
  {
    title: "Sustainable Engineering",
    description:
      "Integrate green materials, energy efficiency, and resilient design into every solution.",
  },
];

export const internships = [
  {
    role: "Structural Design Intern",
    organization: "Engineering Consultancy Firm",
    period: "Summer 2023",
    location: "On-site / Remote",
    description:
      "Assisted senior engineers in load calculations, structural modeling, and preparation of working drawings for residential and commercial projects using ETABS and AutoCAD.",
  },
  {
    role: "Site Engineering Intern",
    organization: "Construction & Infrastructure Company",
    period: "Winter 2023",
    location: "Site-based",
    description:
      "Shadowed site supervisors during foundation and superstructure works, coordinated with subcontractors, and maintained daily quality and safety inspection logs.",
  },
];

export const publications = [
  {
    title:
      "Recycled Plastic in Flexible Pavements: Strength and Cost Implications",
    year: "2024",
    topic: "Sustainable Materials",
    description:
      "Co-authored research paper exploring the use of shredded plastic waste as a partial aggregate replacement in bituminous mixes, evaluating Marshall stability, flow, and economic viability.",
  },
];

export const profile = {
  headline: "Civil Engineering graduate portfolio",
  focus: [
    "Structural analysis and seismic retrofitting",
    "Transportation and pavement engineering",
    "BIM-driven construction management",
    "Sustainable and environmental engineering",
  ],
  stats: {
    academicProjects: projects.length,
    internships: internships.length,
    publications: publications.length,
  },
  website: "https://civil-aesthetic-studio.lovable.app/",
  contact: "Use the contact section of the portfolio website to get in touch.",
};