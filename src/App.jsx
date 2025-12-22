import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, BarChart3, Database, Brain, Code } from 'lucide-react';

export default function DataPortfolio() {
  const [activeSection, setActiveSection] = useState('about');

  const projects = [
    {
      title: "Final Grade Prediction Model",
      description: "Analyzed student performance data with 649 observations to identify key factors affecting final exam grades. Used statistical analysis and predictive modeling to narrow 30+ variables down to 13 significant predictors. Found that previous failures, desire for higher education, and access to educational support showed the strongest variance with final grades.",
      tech: ["R", "rstatix", "car", "GBM", "Statistical Analysis"],
      github: "https://github.com/liabia-ux/r-analysis",
      demo: "https://liabia-ux.github.io/r-analysis/index.html",
      category: "Predictive Modeling"
    },
    {
      title: "Hourly Wage Analysis by Industry and Job Type",
      description: "Conducted comprehensive statistical analysis of hourly wages for 604 employees across different industries and job types. Performed data cleaning, Levene test, Shapiro-Wilk test, post-hoc analysis, and built GBM and ANOVA models. Found that job type and industry explain only 15% of wage variance, suggesting other factors like education, organization size, and experience play larger roles.",
      tech: ["R", "GBM", "ANOVA", "Statistical Testing", "Data Cleaning"],
      github: "https://github.com/liabia-ux/hourly-wage-analysis",
      demo: "https://liabia-ux.github.io/hourly-wage-analysis/",
      category: "Statistical Analysis"
    },
    {
      title: "LA City Data Visualization Analysis",
      description: "Developed Python visualizations analyzing Los Angeles city business data from a JSON dataset using Seaborn. Created a scatter plot showing business openings across council districts over time, color-coded by district. Built a histogram analyzing business registration frequency by council district to identify areas with highest business concentration.",
      tech: ["Python", "Seaborn", "Pandas", "JSON", "Data Visualization"],
      github: "https://github.com/liabia-ux/la-city-data-visualization",
      demo: "#",
      category: "Data Visualization"
    },
    {
      title: "Restaurant Inventory System",
      description: "Designed normalized and denormalized data models with detailed ER diagrams in Visual Paradigm to optimize scalable restaurant inventory operations. Defined relationships among managers, staff, suppliers, POS, and inventory. Developed risk assessments and use cases to identify system vulnerabilities and improve operational resilience.",
      tech: ["Visual Paradigm", "SQL", "ERD Modeling", "Database Design"],
      github: "https://github.com/liabia-ux/restaurant-inventory-system",
      demo: "#",
      category: "Database Design"
    },
    {
      title: "Employee Management Database System",
      description: "Designed 3 comprehensive ERD models and relational schemas to manage employee data, including work hours, roles, and personal details. Created 5+ custom Access forms and automated workflows to enable easy data entry and support dynamic queries and reporting, reducing manual processing time by 30%.",
      tech: ["Microsoft Access", "ERD Modeling", "SQL", "Relational Schema Design"],
      github: "https://github.com/liabia-ux/employee-management-database",
      demo: "#",
      category: "Database Design"
    }
  ];

  const skills = {
    "Programming": ["Python", "R", "SQL"],
    "Data Analysis": ["Pandas", "NumPy", "Excel", "Statistics", "rstatix"],
    "Visualization": ["Tableau", "Matplotlib", "Seaborn", "Plotly"],
    "Database & Modeling": ["SQL", "Database Modeling", "Data Warehouse Modeling"],
    "Business Tools": ["MS Applications", "Confluence", "Workflow Optimization"],
    "Development Tools": ["Visual Paradigm"]
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-slate-800 bg-clip-text text-transparent">Khalia Anderson</h1>
          <div className="flex gap-8">
            {['about', 'projects', 'skills', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-all capitalize relative ${
                  activeSection === section 
                    ? 'text-blue-600' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {section}
                {activeSection === section && (
                  <span className="absolute -bottom-4 left-0 right-0 h-0.5 bg-blue-600"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
              <span className="text-sm font-semibold text-blue-700">Information Systems & Analytics Student</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
              Data-Driven
              <span className="block bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
                Problem Solver
              </span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate about leveraging data analytics and information systems to drive business 
              insights and create innovative solutions for complex challenges.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="https://github.com/liabia-ux" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-full hover:bg-slate-800 transition-all hover:scale-110">
                <Github className="w-5 h-5 text-white" />
              </a>
              <a href="https://www.linkedin.com/in/khalia-anderson-/" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-all hover:scale-110">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="mailto:shaunakhalia@gmail.com" className="p-3 bg-slate-700 rounded-full hover:bg-slate-600 transition-all hover:scale-110">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: BarChart3, label: "Predictive Accuracy", value: "87%" },
              { icon: Database, label: "Records Analyzed", value: "1,253+" },
              { icon: Brain, label: "Statistical Models", value: "Built" },
              { icon: Code, label: "Tech Stack", value: "Python+R+SQL" }
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Featured Projects</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            A selection of data analytics and information systems projects showcasing technical skills and business impact
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                  <span className="text-xs px-3 py-1 bg-blue-600 text-white rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="text-xs px-3 py-1 bg-white text-slate-700 rounded-lg font-medium border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github !== "#" && (
                    <a href={project.github} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                      <Github className="w-4 h-4" />
                      {project.demo !== "#" ? "Code" : "View Project"}
                    </a>
                  )}
                  {project.demo !== "#" && (
                    <a href={project.demo} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">Technical Skills</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Proficient in a comprehensive set of tools and technologies for data analytics and information systems
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b-2 border-blue-600">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, j) => (
                    <span key={j} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-slate-300 mb-8 text-lg leading-relaxed">
            I'm actively seeking opportunities in data analytics, business intelligence, and information systems. 
            Open to internships and full-time positions where I can contribute to data-driven decision making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:shaunakhalia@gmail.com" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Send Email
            </a>
            <a href="https://github.com/liabia-ux/portfolio-site/raw/main/Khalia_Anderson_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-all font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2024 Khalia Anderson. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
