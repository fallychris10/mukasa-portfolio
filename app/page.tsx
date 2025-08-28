"use client"

import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, GraduationCap, Briefcase, Coffee, Calculator, BarChart3, Brain, Network, MapPin, Globe } from "lucide-react";

// ====== Editable Data ======
const PERSONAL = {
  name: "Mukasa Christian",
  title: "Applied Mathematician | Data Analyst | Innovator",
  location: "Kigali, Rwanda",
  email: "mukasachris100@gmail.com",
  phone: "+250 787 766 821",
  website: "https://mukasachristian.dev",
  blurb: "I build mathematical models that turn complex systems into practical decisions—spanning queuing theory, time series forecasting, and risk analytics. I&apos;m passionate about impactful analytics for finance, healthcare, and business optimization in Africa.",
  availability: "Open to roles, research, and collaborations",
};

const SOCIALS = [
  { icon: Github, label: "GitHub", href: "https://github.com/fallychris10" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/christian-mukasa-0a219122a/" },
  { icon: Globe, label: "Website", href: "https://mukasachristian.dev" },
];

const SKILLS = [
  {
    icon: Calculator,
    label: "Mathematical Modeling",
    items: ["Queuing Theory (M/M/c, M/M/c+M)", "Optimization", "Stochastic Processes"],
  },
  {
    icon: BarChart3,
    label: "Data Analysis & Forecasting",
    items: ["Time Series Analysis", "Statistical Modeling", "Business Intelligence"],
  },
  {
    icon: Brain,
    label: "Machine Learning",
    items: ["Predictive Modeling", "Feature Engineering", "Data Mining"],
  },
  {
    icon: Network,
    label: "Technical Skills",
    items: ["Python & R", "SQL & Databases", "Dashboard Development"],
  },
];

const EDUCATION = [
  {
    school: "Bachelor of Science in Applied Mathematics",
    org: "University of Rwanda",
    years: "2019 – 2025 (Expected)",
    details: "Specializing in mathematical modeling, data analysis, and statistical methods with applications in healthcare, finance, and business optimization.",
    icon: GraduationCap,
  },
];

const EXPERIENCE = [
  {
    role: "Data Analysis Intern",
    org: "Rwanda Stock Exchange",
    years: "2024",
    bullets: [
      "Analyzed market data and trading patterns to support investment decisions",
      "Developed automated reporting systems using Python for daily market summaries",
      "Contributed to risk assessment models for equity trading"
    ],
    icon: Briefcase,
  },
  {
    role: "Stock Officer & Systems Developer",
    org: "Bicu Lounge, Kigali",
    years: "2023 - Present",
    bullets: [
      "Built smart stock management systems with AI-driven insights and dashboard features",
      "Developed inventory optimization algorithms reducing stock losses by 25%",
      "Created business intelligence dashboards for sales analysis and customer insights"
    ],
    icon: Briefcase,
  },
  {
    role: "Bartender (Part-time)",
    org: "Hospitality Industry",
    years: "2023 - Present",
    bullets: [
      "Developed strong customer service and multitasking skills under pressure",
      "Gained practical business operations experience in the hospitality sector"
    ],
    icon: Coffee,
  },
];

const PROJECTS = [
  {
    title: "Mathematical Modeling of Hospital Bed Occupancy Using Queuing Theory",
    tags: ["Queuing Theory", "M/M/c & M/M/c+M", "Healthcare Operations"],
    summary: "Developed mathematical models (M/M/c and M/M/c+M) for analyzing and predicting hospital bed usage, with applications in healthcare management and policy planning.",
    impact: [
      "Optimized staff-to-patient ratios using queuing theory",
      "Provided insights for healthcare capacity planning",
    ],
    links: [{ label: "View Dashboard", href: "https://hospital-bed-occupancy.streamlit.app/" }],
  },
  {
    title: "Smart Lounge Stock Management Website",
    tags: ["AI/ML", "Business Intelligence", "Inventory Management"],
    summary: "Built a comprehensive stock management system with AI-driven insights and dashboard features to help lounges efficiently manage inventory and reduce losses.",
    impact: [
      "Reduced inventory losses by 25% through predictive analytics",
      "Automated stock monitoring and reorder processes"
    ],
    links: [{ label: "View Project", href: "https://github.com/fallychris10" }],
  },
  {
    title: "AfromedChain",
    tags: ["Blockchain", "Healthcare", "Innovation"],
    summary: "A blockchain-based medical records and financing platform designed for the African healthcare ecosystem.",
    impact: [
      "Secure medical record management system",
      "Innovative healthcare financing solutions"
    ],
    links: [{ label: "Learn More", href: "#" }],
  },
];

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-200 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-indigo-600 grid place-items-center">
            <span className="text-white font-bold text-lg">MC</span>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900">{PERSONAL.name}</p>
            <p className="text-sm text-gray-600">{PERSONAL.title}</p>
          </div>
        </div>
        
        {/* Navigation - Always Visible */}
        <nav className="flex items-center text-sm gap-1 flex-wrap">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap font-medium ${
                activeSection === section.id 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-100'
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-2">
          <a href="mailto:mukasachris100@gmail.com">
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-full text-sm hover:bg-indigo-700 transition-colors font-medium flex items-center gap-2">
              <Mail className="h-4 w-4" /> Get In Touch
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}

interface HomeProps {
  setActiveSection: (section: string) => void;
}

function Home({ setActiveSection }: HomeProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-12 pb-16">
      <div className="grid md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-3">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Applied Mathematics for <span className="text-indigo-600">Real-World Impact</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed">{PERSONAL.blurb}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-xl text-sm font-medium">{PERSONAL.availability}</span>
            <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-xl text-sm font-medium flex items-center gap-1">
              <MapPin className="h-4 w-4" /> {PERSONAL.location}
            </span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {SOCIALS.map((social, i) => (
              <a key={i} href={social.href} target="_blank" rel="noreferrer">
                <button className="px-4 py-2 border border-gray-300 rounded-xl text-sm hover:border-indigo-300 hover:bg-indigo-50 transition-colors flex items-center gap-2">
                  <social.icon className="h-4 w-4" /> {social.label}
                </button>
              </a>
            ))}
            <button 
              onClick={() => setActiveSection('contact')}
              className="px-6 py-2 bg-indigo-600 text-white rounded-xl text-sm hover:bg-indigo-700 transition-colors flex items-center gap-2"
            >
              <Mail className="h-4 w-4" /> Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Brain className="h-6 w-6 text-indigo-600" />
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Hi, I&apos;m Mukasa Christian — an aspiring Applied Mathematician, Data Analyst, and Innovator from Rwanda. I&apos;m currently completing my Bachelor&apos;s in Applied Mathematics at the University of Rwanda (graduating October 2025), with strong interests in data science, machine learning, and mathematical modeling.
            </p>
            <p>
              I&apos;ve gained practical experience through an internship at the Rwanda Stock Exchange, where I sharpened my skills in data-driven decision-making. Beyond academics, I work as a bartender and stock officer at Bicu Lounge in Kigali, where I&apos;m building smart stock management systems and business dashboards to transform how hospitality businesses manage sales, inventory, and customer insights.
            </p>
            <p>
              I&apos;m passionate about solving real-world problems in Africa through data and technology. Some of my key projects include:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>AfromedChain – a blockchain-based medical records and financing platform</li>
              <li>Hospital Bed Occupancy Modeling – using queuing theory to optimize staff-to-patient ratios</li>
              <li>Smart Aerodynamic Transport Shell – designing lightweight, efficient vehicles for urban Rwanda</li>
            </ul>
            <p>
              Outside of work and studies, I&apos;m a Formula 1 enthusiast and a huge McLaren Motorsport fan 🏎️. I also enjoy playing chess, which sharpens my strategic thinking, and I&apos;m always eager to learn and explore new ideas.
            </p>
            <p className="font-semibold text-indigo-600">
              My mission is simple: to merge mathematics, data, and technology to create smarter solutions that improve lives and businesses in Africa.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Quick Info</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-600" /> 
                  <span>{PERSONAL.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-600" /> 
                  <span>{PERSONAL.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-600" /> 
                  <span>{PERSONAL.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-gray-600" /> 
                  <span>{PERSONAL.website}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-8">
          <Calculator className="h-6 w-6 text-indigo-600" />
          <h2 className="text-3xl font-bold text-gray-900">Core Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {SKILLS.map((skill, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <skill.icon className="h-6 w-6 text-indigo-600" />
                <h3 className="text-xl font-semibold text-gray-900">{skill.label}</h3>
              </div>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                {skill.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="h-6 w-6 text-indigo-600" />
          <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
        </div>
        
        {/* Education */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-indigo-600" />
            Education
          </h3>
          {EDUCATION.map((ed, i) => (
            <div key={i} className="border-l-4 border-indigo-200 pl-6 pb-6">
              <h4 className="text-lg font-semibold text-gray-900">{ed.school}</h4>
              <p className="text-indigo-600 font-medium">{ed.org} • {ed.years}</p>
              <p className="text-gray-600 mt-2">{ed.details}</p>
            </div>
          ))}
        </div>

        {/* Work Experience */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-indigo-600" />
            Work Experience
          </h3>
          <div className="space-y-8">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="border-l-4 border-indigo-200 pl-6">
                <div className="flex items-start gap-3 mb-3">
                  <exp.icon className="h-5 w-5 text-indigo-600 mt-1" />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">{exp.role}</h4>
                    <p className="text-indigo-600 font-medium">{exp.org} • {exp.years}</p>
                  </div>
                </div>
                <ul className="list-disc pl-8 text-gray-600 space-y-1">
                  {exp.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-8">
          <BarChart3 className="h-6 w-6 text-indigo-600" />
          <h2 className="text-3xl font-bold text-gray-900">Selected Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-4">{project.summary}</p>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1 mb-4">
                {project.impact.map((impact, i) => <li key={i}>{impact}</li>)}
              </ul>
              <div className="flex gap-3">
                {project.links.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 hover:text-indigo-800 underline underline-offset-4"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-8">
          <Mail className="h-6 w-6 text-indigo-600" />
          <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Let&apos;s Connect</h3>
            <p className="text-gray-600 mb-6">
              I&apos;m always interested in discussing new opportunities, collaborations, and innovative projects. 
              Whether you&apos;re looking for mathematical modeling expertise, data analysis, or just want to chat about 
              technology in Africa, I&apos;d love to hear from you.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-indigo-600" />
                <a href={`mailto:${PERSONAL.email}`} className="text-gray-700 hover:text-indigo-600">
                  {PERSONAL.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-indigo-600" />
                <a href={`tel:${PERSONAL.phone}`} className="text-gray-700 hover:text-indigo-600">
                  {PERSONAL.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-700">{PERSONAL.location}</span>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              {SOCIALS.map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-indigo-100 rounded-full hover:bg-indigo-200 transition-colors"
                  title={social.label}
                >
                  <social.icon className="h-5 w-5 text-indigo-600" />
                </a>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Services & Expertise</h3>
            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Mathematical Modeling</h4>
                <p>Queuing theory, optimization, and stochastic processes for business and healthcare applications.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Data Analytics</h4>
                <p>Time series forecasting, statistical analysis, and business intelligence dashboards.</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">System Development</h4>
                <p>Custom solutions for inventory management, risk assessment, and process optimization.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Available for Freelance</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">Open to Full-time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.</p>
        <div className="flex gap-6">
          {SOCIALS.map((social, i) => (
            <a 
              key={i} 
              href={social.href} 
              className="hover:text-indigo-600 transition-colors" 
              target="_blank" 
              rel="noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}