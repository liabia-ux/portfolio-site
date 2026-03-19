import React, { useMemo, useState, useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  BarChart3,
  Database,
  Brain,
  Code,
  Sparkles,
} from 'lucide-react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const navItems = ['home', 'projects', 'skills', 'contact'];
  const categories = ['All', 'R', 'SQL', 'Python', 'Machine Learning', 'Finance App'];

  const projects = [
    {
      title: 'Final Grade Prediction Model',
      description:
        'Analyzed student performance data with 649 observations to identify key predictors of final grades using statistical analysis and predictive modeling.',
      highlight:
        'Reduced 30+ variables into the most meaningful predictors tied to grade outcomes.',
      tech: ['R', 'GBM', 'rstatix', 'Statistical Analysis'],
      github: 'https://github.com/liabia-ux/r-analysis',
      demo: 'https://liabia-ux.github.io/r-analysis/index.html',
      category: 'R',
    },
    {
      title: 'Hourly Wage Analysis by Industry and Job Type',
      description:
        'Explored wage variation across 604 employees through testing, modeling, and post-hoc analysis.',
      highlight:
        'Showed that industry and job type explained only part of wage variance, suggesting more drivers behind compensation.',
      tech: ['R', 'ANOVA', 'Data Cleaning', 'Statistical Testing'],
      github: 'https://github.com/liabia-ux/hourly-wage-analysis',
      demo: 'https://liabia-ux.github.io/hourly-wage-analysis/',
      category: 'R',
    },
    {
      title: 'LA City Data Visualization Analysis',
      description:
        'Built Python visualizations from JSON data to analyze business activity patterns across Los Angeles.',
      highlight:
        'Turned raw city data into readable visual insights by district and over time.',
      tech: ['Python', 'Pandas', 'Seaborn', 'JSON'],
      github: 'https://github.com/liabia-ux/la-city-data-visualization',
      demo: '#',
      category: 'Python',
    },
    {
      title: 'Restaurant Inventory System',
      description:
        'Designed normalized and denormalized data models and ER diagrams for restaurant inventory operations.',
      highlight:
        'Mapped relationships across suppliers, staff, inventory, and POS workflows.',
      tech: ['SQL', 'Database Design', 'ERD Modeling', 'Visual Paradigm'],
      github: 'https://github.com/liabia-ux/restaurant-inventory-system',
      demo: '#',
      category: 'SQL',
    },
    {
      title: 'Employee Management Database System',
      description:
        'Created relational schemas, Access forms, and workflows for employee data management and reporting.',
      highlight:
        'Improved structure and data flow for a more efficient internal system.',
      tech: ['SQL', 'Microsoft Access', 'Relational Schema Design'],
      github: 'https://github.com/liabia-ux/employee-management-database',
      demo: '#',
      category: 'SQL',
    },
    {
      title: 'Machine Learning Models',
      description:
        'Applied machine learning techniques for classification, prediction, and model comparison across structured datasets.',
      highlight:
        'Built experience evaluating model performance and translating results into usable insights.',
      tech: ['Machine Learning', 'Python', 'Classification', 'Prediction'],
      github: '#',
      demo: '#',
      category: 'Machine Learning',
    },
    {
      title: 'Finance Chatbot',
      description:
        'Built a finance-focused chatbot experience to guide users through money-related questions in a more conversational interface.',
      highlight:
        'Combines technical build work with a more user-friendly product experience.',
      tech: ['React', 'Python', 'Chatbot', 'Finance', 'LLM App'],
      github: '#',
      demo: '#',
      category: 'Finance App',
    },
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  const skills = {
    Languages: ['Python', 'R', 'SQL'],
    Analytics: ['Statistics', 'Predictive Modeling', 'Data Cleaning', 'Excel'],
    Visualization: ['Tableau', 'Matplotlib', 'Seaborn', 'Plotly'],
    Databases: ['SQL', 'ERD Modeling', 'Database Design', 'Microsoft Access'],
    'Machine Learning': ['Classification', 'Regression', 'Model Evaluation', 'Predictive Analytics'],
    Tools: ['Visual Paradigm', 'Confluence', 'Workflow Optimization', 'MS Applications'],
  };

  const stats = [
    { icon: BarChart3, value: '7+', label: 'Portfolio Projects' },
    { icon: Database, value: '1,253+', label: 'Records Analyzed' },
    { icon: Brain, value: 'Analytics + ML', label: 'Focus Areas' },
    { icon: Code, value: 'Python • R • SQL', label: 'Core Stack' },
  ];

  const renderHome = () => (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
      <Reveal>
        <div>
          <div className="mb-5 inline-flex items-center rounded-full border border-[#e5d7c8] bg-[#fffaf4] px-4 py-2 text-sm font-medium text-[#8a6246] shadow-sm">
            <Sparkles className="mr-2 h-4 w-4" />
            Information Systems & Analytics
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-[#3c291f] md:text-7xl">
            Modern analytics,
            <span className="block text-[#8f6a4e]">clean design,</span>
            <span className="block">and thoughtful systems.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6f5b4b]">
            I’m Khalia Anderson, an aspiring analyst focused on turning data into clear
            insights through analytics, SQL, visualization, and machine learning.
            I enjoy building projects that feel both technically strong and easy to use.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => setActivePage('projects')}
              className="inline-flex items-center gap-2 rounded-full bg-[#7a5238] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_24px_rgba(122,82,56,0.25)] transition hover:-translate-y-0.5 hover:bg-[#67432d]"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={() => setActivePage('contact')}
              className="rounded-full border border-[#d8c6b6] bg-[#fffaf4] px-6 py-3 text-sm font-medium text-[#5c4334] transition hover:-translate-y-0.5 hover:border-[#c9b19d] hover:bg-white"
            >
              Contact Me
            </button>
          </div>

          <div className="mt-8 flex gap-3">
            <a
              href="https://github.com/liabia-ux"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#e4d6c8] bg-white p-3 text-[#5d4638] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f8efe7]"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/khalia-anderson-/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#e4d6c8] bg-white p-3 text-[#5d4638] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f8efe7]"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:shaunakhalia@gmail.com"
              className="rounded-full border border-[#e4d6c8] bg-white p-3 text-[#5d4638] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f8efe7]"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="rounded-[2rem] border border-[#e5d7c8] bg-[linear-gradient(180deg,#fffaf4_0%,#f4e8dc_100%)] p-6 shadow-[0_24px_60px_rgba(94,63,40,0.10)]">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[#8a6246]">Portfolio Snapshot</p>
              <h2 className="mt-1 text-2xl font-semibold text-[#4b3527]">
                Quick Overview
              </h2>
            </div>
            <div className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-[#7a5238] shadow-sm">
              UI + Data
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat, i) => (
              <Reveal key={i} delay={150 + i * 60}>
                <div className="rounded-2xl border border-[#eadfd4] bg-white/80 p-5">
                  <stat.icon className="mb-4 h-6 w-6 text-[#8a6246]" />
                  <div className="text-2xl font-semibold text-[#3f2d22]">{stat.value}</div>
                  <div className="mt-1 text-sm text-[#7a6758]">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-[#6f4e37] p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ead8ca]">
              Focus
            </p>
            <p className="mt-3 text-sm leading-7 text-[#fff6ee]">
              Analytics, database design, machine learning, and user-facing projects
              that present technical work in a cleaner, more polished way.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );

  const renderProjects = () => (
    <div>
      <Reveal>
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8a6246]">
            Selected Work
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-[#3c291f]">
            Projects by Category
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#6f5b4b]">
            Browse my portfolio by category, with each section feeling more curated and easier to navigate.
          </p>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <div className="mb-8 rounded-[1.8rem] border border-[#e5d7c8] bg-[#fffaf4] p-4 shadow-sm">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                  selectedCategory === category
                    ? 'bg-[#7a5238] text-white shadow-[0_10px_20px_rgba(122,82,56,0.18)]'
                    : 'bg-[#f7ede4] text-[#634b3a] hover:bg-[#efdfd1]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="mb-6 flex items-center justify-between rounded-[1.5rem] border border-[#eadfd4] bg-[#fffaf4] px-5 py-4">
          <div>
            <p className="text-sm text-[#7a6758]">Viewing</p>
            <h3 className="text-xl font-semibold text-[#3f2d22]">{selectedCategory}</h3>
          </div>
          <div className="rounded-full bg-[#f2e4d7] px-4 py-2 text-sm font-medium text-[#7a5238]">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
          </div>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project, i) => (
          <Reveal key={`${project.title}-${selectedCategory}`} delay={i * 70}>
            <div className="flex h-full flex-col rounded-[1.8rem] border border-[#e6d7c8] bg-white/90 p-6 shadow-[0_16px_38px_rgba(94,63,40,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_55px_rgba(94,63,40,0.12)]">
              <div className="mb-4 flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold leading-snug text-[#3f2d22]">
                  {project.title}
                </h3>
                <span className="rounded-full bg-[#f2e4d7] px-3 py-1 text-xs font-semibold text-[#7a5238]">
                  {project.category}
                </span>
              </div>

              <p className="text-sm leading-7 text-[#6f5b4b]">{project.description}</p>

              <div className="mt-4 rounded-2xl bg-[#fbf5ee] p-4 text-sm leading-6 text-[#644d3e]">
                <span className="font-semibold text-[#4b3527]">Project note:</span>{' '}
                {project.highlight}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech, j) => (
                  <span
                    key={j}
                    className="rounded-full border border-[#eadfd4] bg-[#fffaf4] px-3 py-1.5 text-xs font-medium text-[#6c5648]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-5">
                {project.github !== '#' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#7a5238] hover:text-[#5f3f2d]"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                )}

                {project.demo !== '#' && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#7a5238] hover:text-[#5f3f2d]"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );

  const renderSkills = () => (
    <div>
      <Reveal>
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8a6246]">
            Technical Toolkit
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-[#3c291f]">
            Skills & Tools
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#6f5b4b]">
            Organized into separate widgets so the page feels more intentional and easier to scan.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Object.entries(skills).map(([category, items], i) => (
          <Reveal key={category} delay={i * 70}>
            <div className="rounded-[1.6rem] border border-[#e3d3c4] bg-[#fffaf4] p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#4b3527]">{category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((skill, j) => (
                  <span
                    key={j}
                    className="rounded-full bg-[#f3e5d9] px-3 py-1.5 text-sm font-medium text-[#634c3d]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );

  const renderContact = () => (
    <Reveal>
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2rem] border border-[#cfb8a5] bg-[linear-gradient(135deg,#6c4c39_0%,#8a6246_100%)] px-8 py-14 text-center text-white shadow-[0_24px_60px_rgba(94,63,40,0.18)]">
          <h2 className="text-4xl font-semibold tracking-tight">Let’s Connect</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f8ede3]">
            I’m interested in analytics, information systems, business intelligence,
            and technical projects that blend strong analysis with thoughtful design.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:shaunakhalia@gmail.com"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#5a3d2d] transition hover:-translate-y-0.5 hover:bg-[#f9f0e8]"
            >
              Send Email
            </a>
            <a
              href="https://github.com/liabia-ux/portfolio-site/raw/main/Khalia_Anderson_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#f0ddd0] px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );

  return (
    <div className="min-h-screen bg-[#f7f1e8] text-[#3f2d22] selection:bg-[#6f4e37] selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(166,123,91,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(122,82,56,0.12),_transparent_30%)]" />

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#e5d7c8] bg-[#f7f1e8]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button
            onClick={() => setActivePage('home')}
            className="text-xl font-semibold tracking-tight text-[#4e3629]"
          >
            Khalia Anderson
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActivePage(item)}
                className={`relative text-sm font-medium capitalize transition ${
                  activePage === item
                    ? 'text-[#5e3f2e]'
                    : 'text-[#7d6757] hover:text-[#4e3629]'
                }`}
              >
                {item}
                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-[#7a5238] transition-all ${
                    activePage === item ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="px-6 pb-16 pt-32 md:pt-40">
        <div className="mx-auto max-w-7xl">
          {activePage === 'home' && renderHome()}
          {activePage === 'projects' && renderProjects()}
          {activePage === 'skills' && renderSkills()}
          {activePage === 'contact' && renderContact()}
        </div>
      </main>

      <footer className="border-t border-[#e6d8ca] px-6 py-8">
        <div className="mx-auto max-w-7xl text-center text-sm text-[#7b6758]">
          <p>© 2026 Khalia Anderson. Built with React & Tailwind CSS.</p>
        </div>
      </footer>

      <SpeedInsights />
    </div>
  );
}
