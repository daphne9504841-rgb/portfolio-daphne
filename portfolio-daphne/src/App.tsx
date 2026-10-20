import { FormEvent, ReactNode, useEffect, useState } from "react";

type Page = "home" | "about" | "portfolio" | "contact" | "login" | "admin";
type IconName =
  | "arrow"
  | "code"
  | "database"
  | "hardware"
  | "web"
  | "moon"
  | "sun"
  | "menu"
  | "close"
  | "github"
  | "linkedin"
  | "mail"
  | "external"
  | "lock"
  | "plus"
  | "edit"
  | "trash"
  | "eye"
  | "logout"
  | "check"
  | "sparkle"
  | "layers"
  | "search";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    code: <><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 5-4 14" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>,
    hardware: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" /><rect x="9" y="9" width="6" height="6" rx="1" /></>,
    web: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></>,
    moon: <path d="M20.5 15.4A8.5 8.5 0 0 1 8.6 3.5 9 9 0 1 0 20.5 15.4Z" />,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    github: <path d="M15 22v-3.9c.04-1-.35-1.96-1.1-2.6 3.6-.4 7.4-1.8 7.4-8A6.2 6.2 0 0 0 19.6 3a5.8 5.8 0 0 0-.2-4s-1.3-.4-4.4 1.7a15.4 15.4 0 0 0-8 0C3.9-1.4 2.6-1 2.6-1A5.8 5.8 0 0 0 2.4 3 6.2 6.2 0 0 0 .7 7.5c0 6.2 3.8 7.6 7.4 8-.74.63-1.13 1.57-1.1 2.6V22" />,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2c.8-1.4 2.3-3 5-3Z" /><path d="M2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    external: <><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" /></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></>,
    plus: <><path d="M12 5v14M5 12h14" /></>,
    edit: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" /></>,
    trash: <><path d="M3 6h18M8 6V4h8v2M19 6l-1 15H6L5 6M10 11v5M14 11v5" /></>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" /><circle cx="12" cy="12" r="2.5" /></>,
    logout: <><path d="M10 17l5-5-5-5M15 12H3" /><path d="M15 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    sparkle: <><path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2Z" /><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7Z" /></>,
    layers: <><path d="m12 2 9 5-9 5-9-5Z" /><path d="m3 12 9 5 9-5M3 17l9 5 9-5" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Button({
  children,
  variant = "primary",
  icon,
  onClick,
  type = "button",
  className = "",
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  icon?: IconName;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
}) {
  return <button type={type} className={`btn btn-${variant} ${className}`} onClick={onClick}>{children}{icon && <Icon name={icon} size={18} />}</button>;
}

function SectionTitle({ eyebrow, title, text, centered = false }: { eyebrow: string; title: ReactNode; text?: string; centered?: boolean }) {
  return <div className={`section-title ${centered ? "centered" : ""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

const interestCards = [
  { icon: "code" as IconName, title: "Programação", text: "Lógica, resolução de problemas e construção de soluções eficientes.", index: "01" },
  { icon: "web" as IconName, title: "Desenvolvimento web", text: "Interfaces acessíveis, responsivas e experiências digitais bem pensadas.", index: "02" },
  { icon: "database" as IconName, title: "Banco de dados", text: "Organização, consultas e segurança de informações em aplicações.", index: "03" },
  { icon: "hardware" as IconName, title: "Hardware", text: "Curiosidade por componentes, manutenção e o funcionamento da tecnologia.", index: "04" },
];

function Header({ page, setPage, dark, setDark }: { page: Page; setPage: (p: Page) => void; dark: boolean; setDark: (v: boolean) => void }) {
  const [open, setOpen] = useState(false);
  const navigate = (p: Page) => { setPage(p); setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return <header className="header"><div className="nav-wrap">
    <button className="brand" onClick={() => navigate("home")} aria-label="Ir para o início"><span>DP</span><strong>Daphne<span>.</span></strong></button>
    <nav className={open ? "nav open" : "nav"} aria-label="Navegação principal">
      {([["home", "Início"], ["about", "Quem sou"], ["portfolio", "Portfólio"], ["contact", "Contato"]] as [Page, string][]).map(([key, label]) => <button key={key} className={page === key ? "active" : ""} onClick={() => navigate(key)}>{label}</button>)}
      <button className="mobile-login" onClick={() => navigate("login")}>Área admin</button>
    </nav>
    <div className="nav-actions"><button className="icon-btn" onClick={() => setDark(!dark)} aria-label={dark ? "Ativar modo claro" : "Ativar modo escuro"}><Icon name={dark ? "sun" : "moon"} /></button><Button variant="secondary" onClick={() => navigate("login")}>Área admin</Button><button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-label="Abrir menu"><Icon name={open ? "close" : "menu"} /></button></div>
  </div></header>;
}

function Home({ setPage }: { setPage: (p: Page) => void }) {
  return <main>
    <section className="hero page-section"><div className="hero-copy">
      <div className="status"><span /><span>Disponível para aprender e criar</span></div>
      <h1>Oi, eu sou a <span>Daphne!</span></h1>
      <p className="hero-lead">Estudante de <strong>Tecnologia da Informação</strong>, construindo meu caminho no universo da tecnologia.</p>
      <p className="hero-sub">Este é o meu espaço para compartilhar aprendizados, interesses e projetos ao longo dessa jornada.</p>
      <div className="hero-actions"><Button icon="arrow" onClick={() => setPage("portfolio")}>Explorar portfólio</Button><Button variant="secondary" onClick={() => setPage("about")}>Conhecer minha trajetória</Button></div>
      <div className="social-row"><span>Conecte-se</span><i /><button aria-label="GitHub"><Icon name="github" /></button><button aria-label="LinkedIn"><Icon name="linkedin" /></button></div>
    </div>
    <div className="hero-visual" aria-label="Espaço reservado para a foto de Daphne">
      <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      <div className="code-chip chip-one"><Icon name="code" size={17} /> HTML · CSS</div>
      <div className="code-chip chip-two"><Icon name="database" size={17} /> Dados</div>
      <div className="portrait-shell"><div className="portrait"><span>DP</span><small>Sua foto aqui</small></div></div>
      <div className="spark spark-one">+</div><div className="spark spark-two">×</div>
    </div></section>
    <section className="interests page-section"><SectionTitle eyebrow="Áreas em desenvolvimento" title={<>Tecnologia que me <span>move</span></>} text="Interesses que orientam meus estudos e minha evolução profissional." />
      <div className="interest-grid">{interestCards.map(card => <article className="interest-card" key={card.title}><div className="card-top"><span className="card-icon"><Icon name={card.icon} size={23} /></span><em>{card.index}</em></div><h3>{card.title}</h3><p>{card.text}</p><div className="card-line" /></article>)}</div>
    </section>
    <section className="cta page-section"><div><span className="eyebrow">Vamos conversar?</span><h2>Ideias crescem quando<br /><span>compartilhadas.</span></h2><p>Estou sempre aberta a trocar experiências, aprender e colaborar em novos desafios.</p></div><Button variant="secondary" icon="arrow" onClick={() => setPage("contact")}>Entrar em contato</Button></section>
  </main>;
}

function About({ setPage }: { setPage: (p: Page) => void }) {
  return <main><section className="inner-hero page-section"><span className="eyebrow">Quem sou eu</span><h1>Curiosidade que vira <span>código.</span></h1><p>Uma estudante em constante construção, explorando as diferentes camadas da tecnologia.</p></section>
    <section className="story page-section"><div className="story-art"><div className="terminal"><div className="terminal-head"><i /><i /><i /><span>minha-jornada.js</span></div><div className="terminal-code"><p><b>const</b> daphne = {"{"}</p><p>&nbsp;&nbsp;formacao: <em>"Tecnologia da Informação"</em>,</p><p>&nbsp;&nbsp;mindset: <em>"aprender sempre"</em>,</p><p>&nbsp;&nbsp;objetivo: <em>"criar com propósito"</em></p><p>{"}"}</p><p className="cursor-line">&gt; construindo o próximo capítulo_</p></div></div></div>
      <div className="story-copy"><span className="eyebrow">Minha trajetória</span><h2>Aprendendo um passo de cada vez</h2><p>Sou estudante de Tecnologia da Informação e estou desenvolvendo minha base profissional por meio de estudos, prática e curiosidade.</p><p>Tenho interesse em compreender tanto o que acontece por trás do código quanto a experiência de quem usa uma solução. Cada novo conceito é uma oportunidade de ampliar meu repertório.</p><blockquote>“Tecnologia é uma jornada contínua — e estou animada para construir cada etapa.”</blockquote></div>
    </section>
    <section className="about-interests page-section"><SectionTitle centered eyebrow="O que desperta minha curiosidade" title={<>Múltiplas áreas, um só <span>propósito</span></>} text="Construir conhecimento sólido para transformar desafios em soluções." /><div className="interest-grid">{interestCards.map(card => <article className="interest-card compact" key={card.title}><span className="card-icon"><Icon name={card.icon} /></span><h3>{card.title}</h3><p>{card.text}</p></article>)}</div></section>
    <section className="goals page-section"><div className="goals-copy"><span className="eyebrow">Próximos passos</span><h2>Onde quero chegar</h2><p>Meu objetivo é evoluir de forma consistente, transformar conhecimento em projetos reais e encontrar oportunidades para colaborar com pessoas e equipes que valorizam aprendizado.</p><Button icon="arrow" onClick={() => setPage("portfolio")}>Acompanhar projetos</Button></div><div className="goal-list"><div><span>01</span><p><strong>Consolidar fundamentos</strong>Praticar e aprofundar conhecimentos técnicos.</p></div><div><span>02</span><p><strong>Criar projetos reais</strong>Aplicar o aprendizado em soluções úteis.</p></div><div><span>03</span><p><strong>Crescer em equipe</strong>Aprender, colaborar e compartilhar ideias.</p></div></div></section>
  </main>;
}

function Portfolio({ setPage }: { setPage: (p: Page) => void }) {
  const [filter, setFilter] = useState("Todos");
  return <main><section className="inner-hero page-section portfolio-head"><span className="eyebrow">Portfólio</span><h1>Projetos e <span>aprendizados.</span></h1><p>Um espaço que crescerá junto com minha jornada em tecnologia.</p></section>
    <section className="portfolio-area page-section"><div className="filter-row" role="group" aria-label="Filtrar projetos">{["Todos", "Web", "Dados", "Hardware"].map(item => <button className={filter === item ? "active" : ""} key={item} onClick={() => setFilter(item)}>{item}</button>)}</div>
      <div className="empty-projects"><div className="empty-visual"><div className="window-mock"><div className="window-top"><i /><i /><i /></div><div className="window-body"><span /><span /><span /></div></div><div className="float-icon"><Icon name="sparkle" /></div></div><span className="eyebrow">Em construção</span><h2>Novos projetos em breve</h2><p>Este portfólio está pronto para receber projetos reais vindos do Supabase. Nenhuma experiência fictícia foi adicionada.</p><Button variant="secondary" icon="mail" onClick={() => setPage("contact")}>Falar com a Daphne</Button></div>
      <div className="project-skeletons"><article><span /><span /><span /><div><i /><i /></div></article><article><span /><span /><span /><div><i /><i /></div></article><article><span /><span /><span /><div><i /><i /></div></article></div>
    </section>
  </main>;
}

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  return <main><section className="contact-layout page-section"><div className="contact-copy"><span className="eyebrow">Contato</span><h1>Vamos criar uma boa <span>conversa.</span></h1><p>Tem uma ideia, oportunidade ou quer apenas trocar experiências sobre tecnologia? Envie uma mensagem.</p><div className="contact-links"><div><span><Icon name="mail" /></span><p><small>E-mail</small><strong>Adicione seu e-mail</strong></p></div><div><span><Icon name="linkedin" /></span><p><small>LinkedIn</small><strong>Adicione seu perfil</strong></p></div><div><span><Icon name="github" /></span><p><small>GitHub</small><strong>Adicione seu usuário</strong></p></div></div><div className="privacy-note"><Icon name="lock" size={17} /><span>Seus dados não serão armazenados nesta demonstração.</span></div></div>
    <form className="contact-form" onSubmit={submit}><div className="form-head"><span><Icon name="mail" /></span><div><h2>Envie uma mensagem</h2><p>Responderei assim que possível.</p></div></div>
      <label>Nome<span>*</span><input required placeholder="Como posso te chamar?" /></label><label>E-mail<span>*</span><input required type="email" placeholder="seuemail@exemplo.com" /></label><label>Assunto<select defaultValue=""><option value="" disabled>Selecione um assunto</option><option>Oportunidade</option><option>Projeto</option><option>Conversa sobre tecnologia</option></select></label><label>Mensagem<span>*</span><textarea required placeholder="Conte um pouco sobre o motivo do contato..." rows={5} /></label>
      <Button type="submit" icon="arrow">{sent ? "Mensagem preparada" : "Enviar mensagem"}</Button>{sent && <p className="form-success"><Icon name="check" size={17} /> Demonstração concluída. Conecte o Supabase para realizar o envio.</p>}</form></section></main>;
}

function Login({ setPage }: { setPage: (p: Page) => void }) {
  const [show, setShow] = useState(false);
  return <main className="auth-page"><div className="auth-decoration"><div className="auth-grid" /><div className="auth-message"><span className="brand-mark">DP</span><h1>Conteúdo que cresce com a <span>jornada.</span></h1><p>Uma área reservada para manter projetos e aprendizados sempre atualizados.</p><div className="auth-feature"><Icon name="lock" /><span><strong>Acesso seguro</strong>Autenticação será protegida pelo Supabase</span></div></div></div>
    <div className="login-panel"><button className="back-link" onClick={() => setPage("home")}>← Voltar ao portfólio</button><div className="login-card"><span className="login-icon"><Icon name="lock" /></span><span className="eyebrow">Área administrativa</span><h2>Boas-vindas</h2><p>Entre para gerenciar os projetos publicados.</p><label>E-mail<input type="email" placeholder="admin@exemplo.com" /></label><label>Senha<div className="password"><input type={show ? "text" : "password"} placeholder="••••••••" /><button type="button" onClick={() => setShow(!show)} aria-label="Mostrar senha"><Icon name="eye" size={18} /></button></div></label><div className="login-meta"><label><input type="checkbox" /> Lembrar de mim</label><button>Esqueci minha senha</button></div><Button className="full" icon="arrow" onClick={() => setPage("admin")}>Visualizar painel demo</Button><div className="demo-warning"><Icon name="sparkle" size={17} /><span><strong>Modo demonstração</strong>Conecte o Supabase para habilitar autenticação real.</span></div></div></div>
  </main>;
}

function Admin({ setPage }: { setPage: (p: Page) => void }) {
  const [modal, setModal] = useState(false);
  return <main className="admin-page"><aside className="admin-side"><button className="brand" onClick={() => setPage("home")}><span>DP</span><strong>Daphne<span>.</span></strong></button><nav><small>MENU</small><button className="active"><Icon name="layers" />Projetos</button><button onClick={() => setPage("home")}><Icon name="eye" />Ver portfólio</button></nav><div className="admin-profile"><span>DP</span><p><strong>Daphne Pereira</strong><small>Administradora</small></p><button onClick={() => setPage("home")}><Icon name="logout" size={18} /></button></div></aside>
    <section className="admin-content"><header><div><span className="eyebrow">Painel administrativo</span><h1>Projetos</h1><p>Gerencie o conteúdo que aparece no seu portfólio.</p></div><Button icon="plus" onClick={() => setModal(true)}>Novo projeto</Button></header>
      <div className="admin-stats"><article><span><Icon name="layers" /></span><p><small>Total de projetos</small><strong>0</strong></p></article><article><span><Icon name="eye" /></span><p><small>Publicados</small><strong>0</strong></p></article><article><span><Icon name="edit" /></span><p><small>Rascunhos</small><strong>0</strong></p></article></div>
      <div className="admin-toolbar"><div><Icon name="search" size={18} /><input placeholder="Buscar projetos..." /></div><select><option>Todos os status</option><option>Publicado</option><option>Rascunho</option></select></div>
      <div className="admin-empty"><span><Icon name="layers" size={28} /></span><h2>Nenhum projeto cadastrado</h2><p>Comece adicionando seu primeiro projeto real ao portfólio.</p><Button icon="plus" onClick={() => setModal(true)}>Cadastrar projeto</Button></div>
    </section>
    {modal && <div className="modal-backdrop" onMouseDown={() => setModal(false)}><div className="project-modal" onMouseDown={e => e.stopPropagation()}><div className="modal-head"><div><span className="eyebrow">Novo conteúdo</span><h2>Cadastrar projeto</h2></div><button className="icon-btn" onClick={() => setModal(false)}><Icon name="close" /></button></div><label>Título do projeto<input placeholder="Nome do projeto" /></label><label>Descrição<textarea rows={4} placeholder="Conte sobre o desafio e a solução..." /></label><div className="split-fields"><label>Categoria<select><option>Desenvolvimento web</option><option>Banco de dados</option><option>Hardware</option></select></label><label>Status<select><option>Rascunho</option><option>Publicado</option></select></label></div><label>Tecnologias<input placeholder="Ex.: HTML, CSS, JavaScript" /></label><div className="modal-actions"><Button variant="ghost" onClick={() => setModal(false)}>Cancelar</Button><Button onClick={() => setModal(false)}>Salvar demonstração</Button></div></div></div>}
  </main>;
}

function Footer({ setPage }: { setPage: (p: Page) => void }) {
  return <footer><div className="footer-inner"><div className="footer-brand"><span className="brand-mark">DP</span><p><strong>Daphne Pereira</strong><small>Estudante de Tecnologia da Informação</small></p></div><div className="footer-nav"><button onClick={() => setPage("home")}>Início</button><button onClick={() => setPage("about")}>Quem sou</button><button onClick={() => setPage("portfolio")}>Portfólio</button><button onClick={() => setPage("contact")}>Contato</button></div><div className="footer-social"><button aria-label="GitHub"><Icon name="github" /></button><button aria-label="LinkedIn"><Icon name="linkedin" /></button><button aria-label="E-mail"><Icon name="mail" /></button></div></div><div className="footer-bottom"><span>© 2025 Daphne Pereira. Feito com intenção e curiosidade.</span><span>Estudando • Criando • Evoluindo</span></div></footer>;
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  useEffect(() => { document.documentElement.dataset.theme = dark ? "dark" : "light"; localStorage.setItem("theme", dark ? "dark" : "light"); }, [dark]);
  const changePage = (next: Page) => { setPage(next); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const isAuth = page === "login" || page === "admin";
  return <div className="app"><Header page={page} setPage={changePage} dark={dark} setDark={setDark} />{page === "home" && <Home setPage={changePage} />}{page === "about" && <About setPage={changePage} />}{page === "portfolio" && <Portfolio setPage={changePage} />}{page === "contact" && <Contact />}{page === "login" && <Login setPage={changePage} />}{page === "admin" && <Admin setPage={changePage} />}{!isAuth && <Footer setPage={changePage} />}</div>;
}
