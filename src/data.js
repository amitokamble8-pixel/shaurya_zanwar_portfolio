/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Shaurya",
  last: " Zanwar",
  fullName: "Shaurya Zanwar",
  tagline: "Student | Engineer | Athlete | Builder",
  location: "Chhatrapati Sambhajinagar, Maharashtra",
  email: "shauryazanwar1@gmail.com",
  phone: "",
  bio: [
    "I'm an IB Diploma student at Fountainhead Wockhardt Global School in Chhatrapati Sambhajinagar, Maharashtra, graduating in May 2027. I study Mathematics AA, Physics, and Business Management at Higher Level, and Chemistry, English Language & Literature, and Hindi B at Standard Level. I intend to pursue civil engineering, and I'm drawn to infrastructure, manufacturing, and practical engineering — ideas I can build, test, and refine.",
    "My experiences span two construction and infrastructure internships, independent structural-vibration research, fitness hardware design, and competitive robotics. Together, they have given me exposure to how engineering works on real sites and in real teams — from technical drawings and tenders to prototyping, testing, and data analysis.",
    "Outside academics, I founded MAXUS Fitness — an adjustable dumbbell and kettlebell system built from recycled metal — serve as Student Council President and on the FWGS Rotaract Club's Board of Directors, captain the Maharashtra U-17 Netball Team, and compete in tennis, basketball, swimming, sprinting, international debate, and Model United Nations.",
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "/placeholder.pdf",
  photo: "/photo.jpg",
  aboutPhoto: "/about-photo.jpg",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Work Experience", to: "/work" },
      { label: "Featured Projects", to: "/projects" },
      { label: "Areas of Interest", to: "/publications" },
    ],
  },
  { label: "Achievements", to: "/awards" },
  { label: "Community & Teaching", to: "/volunteering" },
  { label: "Beyond Academics", to: "/sports" },
];

/* ---- Roles & engagement (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "np-infraprojects",
    role: "Engineering Intern",
    org: "NP Infraprojects India Pvt. Ltd.",
    logo: "",
    location: "Bhopal, Madhya Pradesh, India",
    dates: "13 Apr – 13 Jun 2026",
    meta: "Apr – Jun 2026 · Bhopal, India ·",
    badge: "Internship",
    desc: "Engineering internship at NP Infraprojects providing practical exposure to on-site engineering workflows and to how departments coordinate infrastructure work.",
    bullets: [
      "Gained practical exposure to AutoCAD, site surveys, construction drawings, and on-site engineering workflows",
      "Reviewed financial records and balance sheets, and learned accounting software and project documentation",
      "Developed an understanding of how different departments coordinate to deliver infrastructure projects",
    ],
    tags: ["Civil Engineering", "Infrastructure", "AutoCAD", "Site Surveys"],
    featured: true,
  },
  {
    slug: "dewashish-construction",
    role: "Engineering Intern",
    org: "Dewashish Construction Pvt. Ltd.",
    logo: "",
    location: "India",
    dates: "1 Aug – 5 Sep 2025",
    meta: "Aug – Sep 2025 · India ·",
    badge: "Internship",
    desc: "Engineering internship at Dewashish Construction focused on tender preparation, regulatory requirements, and technical drawings in construction projects.",
    bullets: [
      "Observed tender preparation and learned how royalties and government requirements affect construction projects",
      "Studied technical drawings as a means of communication between design engineers and site teams",
      "Developed foundational technical drawing skills",
    ],
    tags: ["Construction", "Tenders", "Technical Drawing", "Regulations"],
    featured: true,
  },
  {
    slug: "student-council-president",
    role: "President, Student Council",
    org: "Fountainhead Wockhardt Global School",
    logo: "",
    location: "Chhatrapati Sambhajinagar, Maharashtra, India",
    dates: "2026 – Present",
    meta: "2026 – Present · 40-Member Council · 300+ Students Represented ·",
    badge: "Elected",
    desc: "President of the student body, representing 300+ students and leading a 40-member student council across welfare, peer academic support, and school events.",
    bullets: [
      "Represents 300+ students and chairs meetings of a 40-member student council",
      "Coordinates student welfare, peer academic support, and school events",
      "Previously served as Deputy House Captain (Grade 9), House Captain (Grade 10), and Sports Captain (Grade 11)",
    ],
    tags: ["Leadership", "Student Governance"],
    featured: false,
  },
  {
    slug: "fwgs-rotaract",
    role: "Board of Directors Member",
    org: "FWGS Rotaract Club",
    logo: "",
    location: "Chhatrapati Sambhajinagar, Maharashtra, India",
    dates: "",
    meta: "Rotaract · Board of Directors ·",
    badge: "Board",
    desc: "Serves on the Board of Directors of the school's Rotaract Club and participates in its community service initiatives.",
    bullets: [
      "Serves on the club's Board of Directors",
      "Participates in the club's community service initiatives",
    ],
    tags: ["Leadership", "Community Service"],
    featured: false,
  },
  {
    slug: "maharashtra-u17-netball-captain",
    role: "Captain, Maharashtra U-17 Netball Team",
    org: "School Sports / State Team",
    logo: "",
    location: "Maharashtra, India",
    dates: "Since 2023",
    meta: "Since 2023 · Maharashtra, India · 69th SGFI Bronze ·",
    badge: "Captain",
    desc: "Captained the Maharashtra U-17 Netball Team to a bronze medal at the 69th SGFI National Championship in Barmer, Rajasthan.",
    bullets: [
      "Captained the team to Bronze at the 69th SGFI National Championship in Barmer, Rajasthan",
      "Placed 1st at DSO and divisional competitions and 4th at state level",
      "Selected for the ISSO national squad at the 67th SGFI Games",
    ],
    tags: ["Netball", "Team Leadership", "Athletics"],
    featured: false,
  },
  {
    slug: "stepping-stones-virtual-debate",
    role: "Debater",
    org: "Stepping Stones International Virtual Debate Competition",
    logo: "",
    location: "Remote",
    dates: "2025",
    meta: "2025 · International Virtual Debate · Overall Champion ·",
    badge: "Competition",
    desc: "Competed in the Stepping Stones International Virtual Debate Competition, winning first place overall and the award for best overall rebuttal.",
    bullets: [
      "Won 1st Place Overall at the Stepping Stones International Virtual Debate Competition",
      "Received the Best Overall Rebuttal award",
    ],
    tags: ["Debate", "Public Speaking", "Argumentation"],
    featured: false,
  },
  {
    slug: "diplomat-mun",
    role: "Delegate",
    org: "Diplomat Model United Nations",
    logo: "",
    location: "India",
    dates: "2024 – 2025",
    meta: "DISEC · Yemen · Best Delegate ·",
    badge: "Delegate",
    desc: "Represented Yemen in DISEC, developing working papers, negotiating coalitions, and contributing to committee resolutions.",
    bullets: [
      "Represented Yemen in DISEC, developing working papers and negotiating coalitions",
      "Contributed to committee resolutions",
      "Awarded Best Delegate",
    ],
    tags: ["Model UN", "International Relations", "Policy"],
    featured: false,
  },
  {
    slug: "iimun",
    role: "Delegate",
    org: "IIMUN",
    logo: "",
    location: "India",
    dates: "2024 – 2025",
    meta: "UNODC · USA · Best Delegate ·",
    badge: "Delegate",
    desc: "Represented the USA in UNODC, developing working papers, negotiating coalitions, and contributing to committee resolutions.",
    bullets: [
      "Represented the USA in UNODC, developing working papers and negotiating coalitions",
      "Contributed to committee resolutions",
      "Awarded Best Delegate",
    ],
    tags: ["Model UN", "International Relations", "Policy"],
    featured: false,
  },
  {
    slug: "community-service-initiatives",
    role: "Organizer & Volunteer",
    org: "Various Community Initiatives",
    logo: "",
    location: "Chhatrapati Sambhajinagar, Maharashtra, India",
    dates: "2024 – Present",
    meta: "Maharashtra, India · 30+ Students Tutored · ₹65,000 Raised · 25–30 Farming Families Supported ·",
    badge: "Service",
    desc: "Led and participated in community and social impact initiatives spanning academic tutoring, fundraising, heritage cleanups, art mentorship, road-safety education, and animal welfare.",
    bullets: [
      "Tutored 30+ students in Grades 5–7 in mathematics, science, and English over 6–7 months",
      "Canvassed 150+ households, raising approximately ₹65,000 plus ₹30,000 worth of equipment and supporting 25–30 farming families",
      "Taught Grades 3–6 about traffic signs, pedestrian safety, and safe travel habits",
      "Led drawing and visual-arts sessions for children at an orphanage",
      "Participated in litter removal at Ellora Caves and co-founded a neighborhood plogging group",
      "Helped organize charity carnivals and essential-ration drives, and supported stray-animal care",
    ],
    tags: ["Community Service", "Tutoring", "Fundraising", "Art Mentorship"],
    featured: false,
  },
];

/* ---- Engineering projects (renders as "Featured Projects") ---- */

export const PROJECTS = [
  {
    name: "MAXUS Fitness — Adjustable Dumbbell & Kettlebell System",
    org: "Founder & Product Lead",
    meta: "2025 – Present",
    desc: "Designed an adjustable dumbbell and kettlebell system with interchangeable plates and a total capacity of 40 kg. Led CAD modelling, sand-casting mould design, recycled-metal casting, and prototyping, building the prototype for approximately ₹5,000. Sold 7 sets, generating approximately ₹50,000 in revenue. Tested durability through 50 drops from 1.5 m, assessed corrosion resistance over two months in humid Mumbai conditions, and collected feedback from 15 peers to inform product improvements.",
    tags: ["Entrepreneurship", "Hardware Development", "CAD", "Sand Casting"],
    featured: true,
  },
  {
    name: "Structural Vibration Monitoring",
    org: "Independent Research",
    meta: "Independent Research",
    desc: "Developed a low-cost monitoring concept using an accelerometer and microcontroller to detect changes in a beam's vibration against a baseline. Analyzed 70 simulated acceleration records using Fourier analysis and damping estimates to investigate stiffness loss and added mass, documenting methods, findings, and limitations.",
    tags: ["Structural Engineering", "Fourier Analysis", "Sensors", "Data Analysis"],
    featured: true,
  },
  {
    name: "Line-Following Autonomous Robot",
    org: "IIT Bombay TechMaster Radiance — Robotics Team Lead",
    meta: "2nd Place, Grand Finale · 2025",
    desc: "Led the development, programming, and calibration of an autonomous line-following robot, earning 2nd Place in the Grand Finale of IIT Bombay's TechMaster Radiance.",
    tags: ["Robotics", "Programming", "Calibration", "Team Leadership"],
    featured: true,
  },
  {
    name: "Eddy-Current Braking",
    org: "IB Physics Extended Essay",
    meta: "Extended Essay",
    desc: "Investigated how magnet-to-disk separation affects the angular deceleration constant of a rotating aluminium disk through experimentation and quantitative analysis.",
    tags: ["Physics", "Electromagnetism", "Experimental Design"],
    featured: false,
  },
  {
    name: "Tire Degradation",
    org: "Mathematical Modeling Investigation",
    meta: "Mathematics Investigation",
    desc: "Applied mathematical modeling and data analysis to investigate tire degradation.",
    tags: ["Mathematical Modeling", "Data Analysis"],
    featured: false,
  },
  {
    name: "Wavelength — Music & Technology Web App",
    org: "Web Development Project",
    meta: "Web Project",
    desc: "Developed a music-focused web application using React, Tailwind CSS, Supabase, and API integration.",
    tags: ["React", "Tailwind CSS", "Supabase", "API Integration"],
    featured: false,
  },
  {
    name: "School Business Fair",
    org: "Entrepreneurship Initiative",
    meta: "School Business Fair",
    desc: "Developed exhibition and pitch proposals linking business concepts with product presentation.",
    tags: ["Entrepreneurship", "Pitching", "Business"],
    featured: false,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "",
    title: "Stepping Stones International Virtual Debate — 1st Place Overall",
    meta: "International Virtual Debate · 2025",
    detail: "Won 1st Place Overall and the Best Overall Rebuttal award at the Stepping Stones International Virtual Debate Competition.",
    link: "",
    featured: true,
  },
  {
    icon: "",
    title: "IIT Bombay TechMaster Radiance — 2nd Place, Grand Finale",
    meta: "Robotics Competition · 2025",
    detail: "Led the development, programming, and calibration of an autonomous line-following robot, earning 2nd Place in the Grand Finale.",
    link: "",
    featured: true,
  },
  {
    icon: "",
    title: "Tennis Nationals — Bronze Medal",
    meta: "AITA · Asian Junior Circuit · ISSO · 20+ National Events",
    detail: "Earned a national bronze medal, competing in 20+ national events — including AITA Championship Series events and ISSO Nationals — and 2 Asian junior tournaments, with 18 hours of weekly training.",
    link: "",
    featured: true,
  },
  {
    icon: "",
    title: "69th SGFI National Netball Championship — Bronze Medal",
    meta: "Maharashtra U-17 · Barmer, Rajasthan",
    detail: "Captained the Maharashtra U-17 Netball Team to bronze at the 69th SGFI National Championship. Also placed 1st at DSO and divisional competitions and 4th at state level, and was selected for the ISSO national squad at the 67th SGFI Games.",
    link: "",
    featured: true,
  },
  {
    icon: "",
    title: "Best Delegate — Diplomat MUN (DISEC) & IIMUN (UNODC)",
    meta: "Model United Nations · 2024 – 2025",
    detail: "Awarded Best Delegate at two separate MUN conferences — representing Yemen in DISEC (Diplomat MUN) and the USA in UNODC (IIMUN).",
    link: "",
    featured: true,
  },
  {
    icon: "",
    title: "Maharashtra State-Level Swimming — Qualifier",
    meta: "Competitive Swimming",
    detail: "Qualified for state-level swimming competition in Maharashtra.",
    link: "",
    featured: false,
  },
  {
    icon: "",
    title: "Podium Finishes — 100 m & 200 m Sprints",
    meta: "Zonal & Inter-City Meets",
    detail: "Earned podium finishes in 100 m and 200 m sprint events at zonal and inter-city meets.",
    link: "",
    featured: false,
  },
  {
    icon: "",
    title: "Grassroots Charity Fundraiser — ₹65,000 Raised",
    meta: "Community Initiative · 150+ Households · 25–30 Farming Families",
    detail: "Canvassed 150+ households in Chhatrapati Sambhajinagar, raising approximately ₹65,000 plus ₹30,000 worth of equipment, and supporting 25–30 farming families.",
    link: "",
    featured: false,
  },
];

/* ---- Academic interests ---- */

export const ARTICLES = [
  {
    title: "Civil Engineering & Infrastructure",
    outlet: "How infrastructure is planned, drawn, tendered, regulated, and built — from site surveys and construction drawings to coordination between design and site teams",
    link: "",
  },
  {
    title: "Structural Behaviour & Monitoring",
    outlet: "Using sensors, Fourier analysis, and damping estimates to understand how structures respond to vibration, stiffness loss, and added mass",
    link: "",
  },
  {
    title: "Manufacturing & Product Development",
    outlet: "Taking hardware from CAD model to cast prototype — with a focus on recycled materials, durability testing, and user feedback",
    link: "",
  },
  {
    title: "Robotics & Entrepreneurship",
    outlet: "Building autonomous systems and turning practical engineering ideas into products people can use",
    link: "",
  },
];

/* ---- Leadership, service & community ---- */

export const VOLUNTEER = {
  stats: [
    { value: "30+", label: "Students Tutored" },
    { value: "8+", label: "Community Initiatives" },
    { value: "150+", label: "Households Reached" },
  ],
  orgs: [
    {
      name: "IBrilliant and Youth Academic Tutoring",
      role: "Tutor · Since 2024",
      desc: "Tutored 30+ students in Grades 5–7 in mathematics, science, and English over 6–7 months through individual and small-group support.",
    },
    {
      name: "Grassroots Charity Fundraiser",
      role: "Fundraiser · Since 2024",
      desc: "Canvassed 150+ households in Chhatrapati Sambhajinagar, raising approximately ₹65,000 plus ₹30,000 worth of equipment, and supporting 25–30 farming families.",
    },
    {
      name: "Orphanage Fine-Arts Mentorship",
      role: "Session Lead · Since 2024",
      desc: "Led drawing and visual-arts sessions for children, teaching sketching, perspective, and creative expression.",
    },
    {
      name: "Charity Carnival and Stray-Animal Welfare",
      role: "Organizer · 2024 – 2026",
      desc: "Helped organize charity carnivals and essential-ration drives, and supported stray-animal care through food and community outreach.",
    },
    {
      name: "Youth Road-Safety Education",
      role: "Educator · Since 2025",
      desc: "Taught Grades 3–6 about traffic signs, pedestrian safety, and safe travel habits through interactive lessons.",
    },
    {
      name: "Sustainable Campus Kitchen Garden",
      role: "Contributor · Since 2025",
      desc: "Helped establish and cultivate a campus garden producing fresh vegetables for school support staff.",
    },
    {
      name: "Community and Heritage Cleanups",
      role: "Co-Founder & Volunteer · 2025 – 2026",
      desc: "Participated in litter removal at Ellora Caves and co-founded a neighborhood plogging group combining jogging with roadside cleanup, sustaining six consecutive weeks of runs.",
    },
    {
      name: "FWGS Rotaract Club",
      role: "Board of Directors Member",
      desc: "Serves on the club's Board of Directors and participates in its community service initiatives.",
    },
  ],
};

/* ---- Athletics, debate & competitions (renders on the /sports route) ---- */

export const SPORTS = [
  {
    icon: "",
    name: "Tennis",
    desc: "Competitive tennis player since 2019, training 18 hours per week. Competed in 20+ national events — including AITA Championship Series events and ISSO Nationals — and 2 Asian junior tournaments. Achievement: National bronze medal.",
  },
  {
    icon: "",
    name: "Netball",
    desc: "Captain of the Maharashtra U-17 Netball Team since 2023. Results include 1st at DSO and divisional competitions and 4th at state level. Achievement: Bronze at the 69th SGFI National Championship (Barmer, Rajasthan) · ISSO national squad selection at the 67th SGFI Games.",
  },
  {
    icon: "",
    name: "Basketball",
    desc: "Competed at ISSO National and Maharashtra State basketball tournaments.",
  },
  {
    icon: "",
    name: "Swimming",
    desc: "Competitive swimmer. Achievement: Qualified for state-level swimming in Maharashtra.",
  },
  {
    icon: "",
    name: "Sprinting",
    desc: "Competed in 100 m and 200 m sprint events. Achievement: Podium finishes at zonal and inter-city meets.",
  },
  {
    icon: "",
    name: "International Debate",
    desc: "Competed at the Stepping Stones International Virtual Debate Competition in 2025. Achievement: 1st Place Overall · Best Overall Rebuttal.",
  },
  {
    icon: "",
    name: "Model United Nations",
    desc: "Represented Yemen in DISEC (Diplomat MUN) and the USA in UNODC (IIMUN), developing working papers, negotiating coalitions, and contributing to committee resolutions. Achievement: Best Delegate at both conferences.",
  },
  {
    icon: "",
    name: "Digital Art & Character Design",
    desc: "Creates digital illustrations and fictional character designs, and shares artwork on Instagram. Also participated in the Dr. Homi Bhabha Balvaidnyanik Competition in Grade 9.",
  },
];

/* ---- Skills ---- */
/* NOTE: Skills are taken from the Technical Skills section of the source CV. */

export const SKILLS = [
  {
    group: "Design & Prototyping",
    items: ["AutoCAD", "3D CAD Modelling", "Sand Casting", "Product Development", "Durability Testing"],
  },
  {
    group: "Research & Analysis",
    items: ["Experimental Design", "Fourier Analysis", "Damping Estimation", "Data Analysis", "Technical Writing"],
  },
  {
    group: "Web Development",
    items: ["React", "Tailwind CSS", "Supabase", "API Integration"],
  },
  {
    group: "Additional Training",
    items: ["AutoCAD Course", "Toastmasters Public Speaking Course"],
  },
  {
    group: "Languages",
    items: ["English", "Hindi", "Marathi", "Marwadi"],
  },
];

/* ---- Education (additional export — needs a component if you want to render it) ---- */

export const EDUCATION = [
  {
    school: "Fountainhead Wockhardt Global School",
    location: "Chhatrapati Sambhajinagar, Maharashtra, India",
    level: "International Baccalaureate Diploma Programme",
    dates: "Graduating May 2027",
    gpa: "",
    coursework: [
      "Mathematics AA (HL)",
      "Physics (HL)",
      "Business Management (HL)",
      "Chemistry (SL)",
      "English Language & Literature (SL)",
      "Hindi B (SL)",
    ],
  },
];

/* ---- Test scores (none listed in the source document) ---- */

export const TEST_SCORES = [];

/* ---- Looking ahead ---- */

export const LOOKING_AHEAD = [
  "I want to study civil engineering — understanding how infrastructure is designed, regulated, and built, and how structures can be monitored and made more resilient over their lifetimes.",
  "At university, I hope to pursue these questions through hands-on research, site and lab work, and interdisciplinary problem-solving across infrastructure and manufacturing — while continuing to lead, compete, and contribute.",
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work Experience", to: "/work" },
  { label: "Featured Projects", to: "/projects" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Community & Teaching", to: "/volunteering" },
  { label: "Beyond Academics", to: "/sports" },
];

export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
];
 
