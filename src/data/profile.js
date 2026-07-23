export const profile = {
  name: 'Vaishnavi Bhagwat',
  title: 'MCA Graduate | Full-Stack Developer | Cybersecurity Enthusiast (CEH v13)',
  phone: '8080789816',
  email: 'vbhagwat268@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vaishnavi-bhagwat-26723b3b8',
  github: 'https://github.com/vaishnavi-bhagwat', // placeholder
  location: 'Nashik, Maharashtra, India',
}

export const summary = {
  text: `Motivated MCA graduate with hands-on experience in full-stack web development, cybersecurity (CEH v13), and AI-based applications. Skilled in PHP, MySQL, and Python. Experienced in vulnerability assessment, network scanning, and secure system design. Built a centralized Real Estate CRM system integrating multi-role workflows and API-based lead management. Seeking opportunities in secure enterprise systems and cybersecurity management.`,
}

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'MET Bhujbal Knowledge City, Nashik',
    year: 'Completed June 2026',
    score: '8.68 CGPA',
  },
  {
    degree: 'Bachelor of Business Administration in Computer Applications (BBA CA)',
    institution: 'MET Bhujbal Knowledge City, Nashik',
    year: '2021 – 2024',
    score: '9.16 CGPA',
  },
]

export const experience = [
  {
    role: 'Cybersecurity Intern (VAPT Analyst)',
    company: 'Clavigerous Systems, Nashik',
    period: '2026 – Present',
    bullets: [
      'Working as a VAPT (Vulnerability Assessment & Penetration Testing) Analyst, performing security testing on client web applications.',
      'Identified and reported multiple critical vulnerabilities including OTP Bypass, Cross-Site Scripting (XSS), Clickjacking, Insecure Direct Object Reference (IDOR), Cross-Site Request Forgery (CSRF), and SQL Injection.',
      'Used Burp Suite for vulnerability assessment, network scanning, enumeration, and security audits on test environments.',
      'Currently pursuing Certified Ethical Hacker (CEH v13) certification — applying reconnaissance, scanning, enumeration, and privilege escalation techniques directly during assessments.',
      'Documented findings and contributed to internal security reports.',
    ],
  },
]

export const projects = [
  {
    id: 'family-farmer',
    title: 'Family Farmer: Connecting Farmers and Consumers',
    period: '2025 – 2026 (PBL-II)',
    description:
      'A web platform connecting farmers directly to consumers, removing middlemen. It supports five role-based modules: Farmer, Consumer, Transporter, Distributor, and Admin.',
    features: [
      'Product listing and catalog browsing',
      'Cart & order placement',
      'Order tracking with GPS-based delivery tracking',
      'Feedback and rating system',
      'Admin approval workflow for registration and listings',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Google Maps API'],
    architecture: [
      '3-tier architecture: Presentation / Application / Database',
      'Role-Based Access Control (RBAC)',
      'Diagrams: DFD, Use Case, Activity, Class, Sequence, and ER diagrams',
    ],
    guide: 'Prof. Mehraj Khan, MET Bhujbal Knowledge City',
  },
  {
    id: 'image-stegano',
    title: 'Image Steganography Tool (Image-Stegano)',
    period: 'Jan 2025 – May 2025',
    description:
      'A Python/Java GUI tool that implements multiple image steganography techniques and provides visual analysis tools for security research.',
    features: [
      '1-4 bit LSB encoding & decoding',
      '24/32-bit BPCS (Bit-Plane Complexity Segmentation)',
      'Bitwise XOR and Spiral Embedding',
      'Metadata manipulation and Appended data (EOF)',
      'PNG chunk analysis',
      'Bit-plane viewer, grayscale / color-map analysis',
      'Histogram thresholding and metadata extraction (Drew Noakes library)',
    ],
    tech: ['Java', 'Java Swing', 'BufferedImage'],
    architecture: [
      'Layered MVC-style architecture: User / Controller / Service / Data layers',
    ],
    guide: 'Prof. Javed Attar, MET Bhujbal Knowledge City',
  },
  {
    id: 'stock-management',
    title: 'Stock Management System',
    period: 'Aug 2023 – Apr 2024',
    description:
      'A Java-based system for managing product stock and suppliers with real-time updates and database persistence.',
    features: [
      'Product and supplier management',
      'Real-time stock quantity updates',
      'Search and reporting',
    ],
    tech: ['Java', 'NetBeans', 'MySQL'],
    architecture: [
      'Modeled with ERD, DFD, and Use Case diagrams',
    ],
    guide: null,
  },
  {
    id: 'course-registration',
    title: 'Online Course Registration System',
    period: 'Dec 2022 – May 2023',
    description:
      'A PHP-based course selection platform with secure login, session handling, and role-based access.',
    features: [
      'Student course registration and selection',
      'Secure login and session management',
      'Admin dashboard for course and user management',
    ],
    tech: ['PHP', 'MySQL'],
    architecture: [
      'Role-based access control',
    ],
    guide: null,
  },
]

export const research = {
  title: 'Future of Artificial Intelligence (AI)',
  venue: 'PRECCON 2023, Loni',
  date: 'Mar 2023',
  certificateFile: '/certificates/PRECCON Certificate[43].pdf',
  event: '2nd National Conference on Recent Trends in Engineering and Technology (PRECCON-2023)',
  organizedBy: 'Department of Computer Engineering, Information Technology & Electronics and Computer Engineering, Pravara Rural Engineering College, Loni',
  affiliation: "Women's College, Kopargaon",
  presentationDate: '28th–29th March 2023',
}

export const certifications = [
  {
    name: 'Certified Ethical Hacker (CEH v13) — Certificate of Attendance',
    issuer: 'EC-Council (training conducted at Clavigerous Systems LLP)',
    date: 'June 24, 2026',
    certificateNumber: '795344',
    instructor: 'Aashish Kavishwar',
    verifyUrl: 'https://aspen.eccouncil.org/VerifyEval',
    file: '/certificates/ECC-Evaluation-Certificate.pdf',
  },
  {
    name: 'Digital Personal Data Protection Act (DPDPA), 2023 — Certificate of Completion',
    issuer: 'DPDPA.com',
    date: 'July 22, 2026',
    score: '98%',
    file: '/certificates/DPDPA_Certificate_Vaishnavi_Navnath_Bhagwat.png',
  },
  {
    name: 'Talent Battle CRT (90 Hours) — Aptitude and Technical',
    issuer: 'Talent Battle Pvt. Ltd., at MET Institute of Engineering, Nashik',
    date: 'May 4, 2025',
    certificateNumber: 'METTB1002',
    file: '/certificates/Vaishnavi Bhagwat MET Nashik Certificate.pdf',
  },
  {
    name: 'JDBC in Java',
    issuer: 'Great Learning Academy',
    date: 'April 2024',
    verifyUrl: 'https://verify.mygreatlearning.com/PMETPHUQ',
    file: '/certificates/JDBC in java ertificate.pdf',
  },
  {
    name: 'Front End Development – HTML',
    issuer: 'Great Learning Academy',
    date: 'April 2024',
    verifyUrl: 'https://verify.mygreatlearning.com/VTMHRXNM',
    file: '/certificates/Front End Development HTML.pdf',
  },
  {
    name: 'Python Programming Language',
    issuer: 'MindLuster',
    date: 'September 12, 2023',
    certificateNumber: '4781103439',
    file: '/certificates/Python_Mindluster_Certificate.pdf',
  },
  {
    name: 'Python Programming Professional Certification',
    issuer: 'Itronix Solutions',
    date: 'July 17, 2023',
    certificateNumber: 'IS/PY/23/11071',
    file: '/certificates/python certificate.pdf',
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'PHP'],
  },
  {
    category: 'Web & Database',
    items: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
  },
  {
    category: 'Cybersecurity',
    items: [
      'Burp Suite',
      'Vulnerability Assessment',
      'Penetration Testing',
      'Network Scanning',
      'Reconnaissance',
      'Privilege Escalation (CEH v13 concepts)',
    ],
  },
  {
    category: 'Tools & Platforms',
    items: ['NetBeans', 'phpMyAdmin', 'VS Code', 'XAMPP / WAMP', 'Git'],
  },
]
