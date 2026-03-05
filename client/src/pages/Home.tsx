import { useEffect, useMemo, useRef, useState } from "react";
import {
  Cloud,
  Database,
  Download,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  Moon,
  Server,
  Sun,
  TerminalSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";

type Locale = "pt" | "en";

type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  fork: boolean;
  archived: boolean;
  has_pages: boolean;
  updated_at: string;
};

const PROFILE = {
  name: "Hítalon Saimon",
  title: "Software Engineer in Progress",
  github: "https://github.com/H-Saimon",
  linkedin: "https://www.linkedin.com/in/hítalon-saimon-5aa8b9311/",
  email: "hitalonsaimon.dev@gmail.com",
};

const i18n = {
  pt: {
    nav: ["Sobre", "Habilidades", "Projetos", "Contato"],
    heroBadge: "Portfólio Profissional",
    impact:
      "Transformando experiência humana em arquiteturas de software eficientes.",
    heroCtaProjects: "Ver Projetos",
    heroCtaCv: "Download CV",
    heroCtaContact: "Contato",
    aboutTitle: "Sobre Mim",
    aboutText:
      "Sou um profissional em transição de Instrutor de Sistemas para Desenvolvedor, combinando visão técnica e de negócio para criar produtos úteis, claros e escaláveis. Minha base em suporte técnico, treinamento e atendimento ao cliente fortaleceu minha comunicação e minha capacidade de resolver problemas reais com foco em impacto.",
    skillsTitle: "Habilidades",
    skillsSubtitle:
      "Stack organizada para atuar em times de produto, dados e desenvolvimento full stack.",
    projectsTitle: "Projetos Selecionados",
    projectsSubtitle:
      "Seleção automática baseada em estrelas, organização técnica, completude e relevância de mercado no GitHub.",
    projectsLoading: "Analisando repositórios do GitHub...",
    projectsError:
      "Não foi possível carregar os projetos agora. Verifique sua conexão e tente novamente.",
    repo: "Repositório",
    deploy: "Deploy",
    noDeploy: "Sem deploy público",
    timelineTitle: "Experiência & Educação",
    timeline: [
      {
        title: "Técnico em Desenvolvimento de Sistemas",
        desc: "Formação concluída com foco prático em lógica, banco de dados e desenvolvimento orientado a soluções.",
      },
      {
        title: "Engenharia de Software (em andamento)",
        desc: "Aprofundamento em arquitetura, qualidade de software e desenvolvimento profissional.",
      },
      {
        title: "Suporte Técnico, Treinamento e Atendimento",
        desc: "Experiência sólida com usuários reais, comunicação interpessoal e resolução ágil de incidentes.",
      },
    ],
    footerCta: "Vamos construir algo juntos?",
  },
  en: {
    nav: ["About", "Skills", "Projects", "Contact"],
    heroBadge: "Professional Portfolio",
    impact:
      "Turning human experience into efficient software architectures.",
    heroCtaProjects: "View Projects",
    heroCtaCv: "Download CV",
    heroCtaContact: "Contact",
    aboutTitle: "About Me",
    aboutText:
      "I am transitioning from Systems Instructor to Developer, combining technical and business vision to build useful, clear, and scalable products. My background in technical support, systems training, and customer service strengthened my communication and my ability to solve real-world problems with impact.",
    skillsTitle: "Skills",
    skillsSubtitle:
      "A stack organized to contribute in product, data, and full-stack teams.",
    projectsTitle: "Selected Projects",
    projectsSubtitle:
      "Automatic selection based on stars, code organization, project completeness, and market relevance from GitHub.",
    projectsLoading: "Analyzing GitHub repositories...",
    projectsError:
      "Could not load projects right now. Please check your connection and try again.",
    repo: "Repository",
    deploy: "Deploy",
    noDeploy: "No public deploy",
    timelineTitle: "Experience & Education",
    timeline: [
      {
        title: "Systems Development Technician",
        desc: "Completed technical program focused on practical coding, databases, and solution-driven development.",
      },
      {
        title: "Software Engineering (ongoing)",
        desc: "Deepening knowledge in architecture, software quality, and professional development practices.",
      },
      {
        title: "Technical Support, Training & Customer Success",
        desc: "Strong experience with real users, interpersonal communication, and agile issue resolution.",
      },
    ],
    footerCta: "Shall we build something together?",
  },
};

const skillGroups = [
  {
    title: "Backend",
    icon: Server,
    items: ["Java", "Python", "C#", "PHP", "REST APIs"],
  },
  {
    title: "Frontend",
    icon: TerminalSquare,
    items: ["JavaScript", "React", "Angular", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Banco de Dados",
    icon: Database,
    items: ["SQL", "MySQL", "PostgreSQL", "Modelagem", "Consultas"],
  },
  {
    title: "Cloud & Data",
    icon: Cloud,
    items: ["AWS", "Power BI", "Excel", "Dashboards", "Análise"],
  },
];

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [locale, setLocale] = useState<Locale>(
    () => (localStorage.getItem("locale") as Locale) || "pt",
  );
  const [projects, setProjects] = useState<GithubRepo[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [projectError, setProjectError] = useState(false);

  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const t = i18n[locale];

  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/H-Saimon/repos?per_page=100&sort=updated",
        );
        if (!response.ok) throw new Error("GitHub API error");

        const data = (await response.json()) as GithubRepo[];

        const selected = data
          .filter((repo) => !repo.fork && !repo.archived)
          .sort((a, b) => scoreRepo(b) - scoreRepo(a))
          .slice(0, 6);

        setProjects(selected);
        setProjectError(false);
      } catch {
        setProjectError(true);
      } finally {
        setLoadingProjects(false);
      }
    };

    void fetchRepos();
  }, []);

  const scrollTo = (target: React.RefObject<HTMLElement | null>) => {
    target.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const contactLink = `mailto:${PROFILE.email}`;

  const navActions = [
    () => scrollTo(aboutRef),
    () => scrollTo(skillsRef),
    () => scrollTo(projectsRef),
    () => scrollTo(contactRef),
  ];

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <main className="bg-[#F9FAFB] text-[#111827] transition-colors duration-300 dark:bg-[#0F172A] dark:text-[#F8FAFC]">
      <header className="sticky top-0 z-50 border-b border-[#E5E7EB]/90 bg-white/70 backdrop-blur-xl dark:border-[#334155] dark:bg-[#1E293B]/70">
        <div className="container flex h-18 items-center justify-between py-4">
          <div>
            <p className="text-sm text-[#6B7280] dark:text-[#94A3B8]">{PROFILE.name}</p>
            <p className="font-semibold">{PROFILE.title}</p>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {t.nav.map((item, index) => (
              <button
                key={item}
                onClick={navActions[index]}
                className="text-sm text-[#6B7280] transition hover:text-[#2563EB] dark:text-[#94A3B8] dark:hover:text-[#3B82F6]"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLocale((prev) => (prev === "pt" ? "en" : "pt"))}
              className="border-[#E5E7EB] bg-white/70 text-xs hover:bg-[#F3F4F6] dark:border-[#334155] dark:bg-[#1E293B]"
            >
              <Globe className="mr-1 h-4 w-4" />
              {locale.toUpperCase()}
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="border-[#E5E7EB] bg-white/70 hover:bg-[#F3F4F6] dark:border-[#334155] dark:bg-[#1E293B]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </header>

      <section className="container py-24">
        <div className="rounded-3xl border border-[#E5E7EB] bg-white/70 p-10 shadow-sm backdrop-blur-xl dark:border-[#334155] dark:bg-[#1E293B]/60 md:p-16">
          <p className="mb-5 text-sm tracking-[0.2em] text-[#2563EB] dark:text-[#3B82F6]">{t.heroBadge}</p>
          <h1 className="text-4xl font-bold md:text-6xl">{PROFILE.name}</h1>
          <h2 className="mt-4 text-xl text-[#6B7280] dark:text-[#94A3B8]">{PROFILE.title}</h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed">{t.impact}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button onClick={() => scrollTo(projectsRef)} className="bg-[#2563EB] text-white hover:bg-[#1D4ED8] dark:bg-[#3B82F6]">
              {t.heroCtaProjects}
            </Button>
            <Button asChild variant="outline" className="border-[#E5E7EB] dark:border-[#334155]">
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                {t.heroCtaCv}
              </a>
            </Button>
            <Button asChild variant="outline" className="border-[#E5E7EB] dark:border-[#334155]">
              <a href={contactLink}>
                <Mail className="mr-2 h-4 w-4" />
                {t.heroCtaContact}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section ref={aboutRef} className="container py-12">
        <h3 className="text-3xl font-semibold">{t.aboutTitle}</h3>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-[#374151] dark:text-[#CBD5E1]">{t.aboutText}</p>
      </section>

      <section ref={skillsRef} className="container py-12">
        <h3 className="text-3xl font-semibold">{t.skillsTitle}</h3>
        <p className="mt-3 text-[#6B7280] dark:text-[#94A3B8]">{t.skillsSubtitle}</p>

        <div className="mt-8 grid gap-4 md:grid-cols-6">
          {skillGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <Card
                key={group.title}
                className={`border-[#E5E7EB] bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-[#334155] dark:bg-[#1E293B]/70 ${idx === 0 ? "md:col-span-3" : ""} ${idx === 1 ? "md:col-span-3" : ""} ${idx === 2 ? "md:col-span-2" : ""} ${idx === 3 ? "md:col-span-4" : ""}`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <Icon className="h-5 w-5 text-[#06B6D4] dark:text-[#22D3EE]" />
                  <h4 className="font-semibold">{group.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#E5E7EB] px-3 py-1 text-xs text-[#374151] dark:border-[#334155] dark:text-[#CBD5E1]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <section ref={projectsRef} className="container py-12">
        <h3 className="text-3xl font-semibold">{t.projectsTitle}</h3>
        <p className="mt-3 text-[#6B7280] dark:text-[#94A3B8]">{t.projectsSubtitle}</p>

        {loadingProjects && <p className="mt-8 text-sm text-[#6B7280] dark:text-[#94A3B8]">{t.projectsLoading}</p>}
        {projectError && <p className="mt-8 text-sm text-red-500">{t.projectsError}</p>}

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((project) => {
            const deployUrl = resolveDeployUrl(project);
            return (
              <Card
                key={project.id}
                className="flex h-full flex-col justify-between rounded-2xl border-[#E5E7EB] bg-white/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-[#334155] dark:bg-[#1E293B]/70"
              >
                <div>
                  <h4 className="text-xl font-semibold">{project.name}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-[#4B5563] dark:text-[#CBD5E1]">
                    {project.description || "Projeto com foco em aprendizado aplicado e qualidade de implementação."}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[project.language, ...project.topics.slice(0, 4)]
                      .filter(Boolean)
                      .map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#EFF6FF] px-2.5 py-1 text-xs text-[#1D4ED8] dark:bg-[#0F172A] dark:text-[#93C5FD]"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild variant="outline" size="sm" className="border-[#E5E7EB] dark:border-[#334155]">
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      {t.repo}
                    </a>
                  </Button>

                  {deployUrl ? (
                    <Button asChild size="sm" className="bg-[#6366F1] text-white hover:bg-[#4F46E5] dark:bg-[#818CF8] dark:text-[#0F172A]">
                      <a href={deployUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t.deploy}
                      </a>
                    </Button>
                  ) : (
                    <span className="text-xs text-[#9CA3AF]">{t.noDeploy}</span>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="container py-12">
        <h3 className="text-3xl font-semibold">{t.timelineTitle}</h3>
        <div className="mt-8 space-y-6 border-l-2 border-[#E5E7EB] pl-6 dark:border-[#334155]">
          {t.timeline.map((item) => (
            <article key={item.title} className="relative">
              <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-[#2563EB] dark:bg-[#3B82F6]" />
              <h4 className="font-semibold">{item.title}</h4>
              <p className="mt-1 text-sm text-[#4B5563] dark:text-[#CBD5E1]">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <footer ref={contactRef} className="mt-12 border-t border-[#E5E7EB] py-12 dark:border-[#334155]">
        <div className="container">
          <h3 className="text-2xl font-semibold">{t.footerCta}</h3>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button asChild variant="outline" className="border-[#E5E7EB] dark:border-[#334155]">
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button asChild variant="outline" className="border-[#E5E7EB] dark:border-[#334155]">
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" className="border-[#E5E7EB] dark:border-[#334155]">
              <a href={contactLink}>
                <Mail className="mr-2 h-4 w-4" /> {PROFILE.email}
              </a>
            </Button>
          </div>
          <p className="mt-8 text-sm text-[#6B7280] dark:text-[#94A3B8]">© {currentYear} {PROFILE.name}</p>
        </div>
      </footer>
    </main>
  );
}

function scoreRepo(repo: GithubRepo) {
  const stars = repo.stargazers_count * 8;
  const description = repo.description ? 5 : 0;
  const topics = Math.min(repo.topics.length, 5) * 2;
  const homepage = repo.homepage ? 4 : 0;
  const pages = repo.has_pages ? 3 : 0;
  const marketLanguages = ["TypeScript", "JavaScript", "Java", "Python", "C#", "PHP"].includes(
    repo.language || "",
  )
    ? 4
    : 0;
  const recency = Math.max(0, 5 - Math.floor((Date.now() - new Date(repo.updated_at).getTime()) / (1000 * 60 * 60 * 24 * 120)));

  return stars + description + topics + homepage + pages + marketLanguages + recency;
}

function resolveDeployUrl(repo: GithubRepo) {
  if (repo.homepage && repo.homepage.startsWith("http")) return repo.homepage;
  if (repo.has_pages) return `https://h-saimon.github.io/${repo.name}/`;
  return null;
}
