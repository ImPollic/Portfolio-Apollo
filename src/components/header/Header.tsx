import styles from "./header.module.css"

export default function Header(
  { idioma, setIdioma } 
  : { idioma: string, setIdioma: (idioma: string) => void }) {

  const Textos = {
    inicio: ["Início", "Home"],
    sobre: ["Sobre", "About"],
    ferramentas: ["Ferramentas", "Tools"],
    projetos: ["Projetos", "Projects"],
    contato: ["Contato", "Contact"],
  }

  return (
    <header className={styles.header}>
      <section className={styles.headerFirst}>
        <h1 className={styles.headerTitle}>Pollic Website</h1>
      </section>
      <nav className={styles.headerSecond}>
        <a href="#Tela-Inicial" className={styles.headerLink}>{Textos.inicio[idioma === "pt" ? 0 : 1]}</a>
        <a href="#Sobre" className={styles.headerLink}>{Textos.sobre[idioma === "pt" ? 0 : 1]}</a>
        <a href="#Ferramentas" className={styles.headerLink}>{Textos.ferramentas[idioma === "pt" ? 0 : 1]}</a>
        <a href="#Projetos" className={styles.headerLink}>{Textos.projetos[idioma === "pt" ? 0 : 1]}</a>
        <a href="#Contato" className={styles.headerLink}>{Textos.contato[idioma === "pt" ? 0 : 1]}</a>
      </nav>
      <section className={styles.headerThird}>
        <button 
          className={styles.headerButton + " " + (idioma === "pt" ? styles.headerButtonActive : "")} 
          onClick={() => setIdioma(idioma === "pt" ? "en" : "pt")}>Português</button>
        <button 
          className={styles.headerButton + " " + (idioma === "en" ? styles.headerButtonActive : "")} 
          onClick={() => setIdioma(idioma === "pt" ? "en" : "pt")}>English</button>
      </section>
    </header>
  )
}