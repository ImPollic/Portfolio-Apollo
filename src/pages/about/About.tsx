import styles from './about.module.css'

export default function About ({ idioma }: { idioma: string }) {
    const isPortuguese = idioma === "pt";

    return <>
        
        <div className={styles.about} id='Sobre'>

            { isPortuguese ? <>
            <section className={styles.aboutsection}>
                <p className={styles.aboutheader}>Sobre mim</p>
                <p className={styles.abouttext}>
                 Olá! Sou estudante de <strong>Técnico em Informática</strong> pelo IFPB, prestes a concluir minha formação. Minha jornada na tecnologia começou movida pela curiosidade e se transformou em uma verdadeira paixão por programação e desenvolvimento web.
                </p>

                <p className={styles.abouttext}>
                   Tenho experiência trabalhando com <strong>React e Next.js</strong>, utilizando <strong>PostgreSQL</strong> através da <strong>Vercel</strong> para construir aplicações completas. Sou o desenvolvedor do <a href="https://planejartwebsite.vercel.app/login" className={styles.aboutlink}>Sistema Planejart Projetados</a>, um projeto que reflete minha dedicação em criar soluções práticas e funcionais. Atualmente, estou me aprofundando em <strong>Web Design</strong> para criar interfaces ainda mais intuitivas e atraentes.
                </p>

                <p className={styles.abouttext}>
                    Quando não estou codando, você provavelmente me encontrará jogando ou mergulhado em um bom livro. Estou sempre em busca de novos desafios e oportunidades para aprender e evoluir como <strong>desenvolvedor web</strong>.
                </p>
            </section>
            <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '35%', padding: 30, paddingRight: 0}} >
                <img src="/imgs/eu.jpeg" alt="foto-minha" className={styles.aboutimage} />
                <p style={{ fontSize: '1.2rem', marginTop: 10}}>Esse sou eu</p>
            </section>

            </> : <>
            <section className={styles.aboutsection}>
                <p className={styles.aboutheader}>About me</p>
                <p className={styles.abouttext}>
                 Hello! I'm a <strong>Informatics Technical</strong> student at IFPB, about to complete my education. My journey in technology began driven by curiosity and has become a true passion for programming and web development.
                </p>

                <p className={styles.abouttext}>
                   I have experience working with <strong>React and Next.js</strong>, using <strong>PostgreSQL</strong> through <strong>Vercel</strong> to build complete applications. I'm the developer of the <a href="https://planejartwebsite.vercel.app/login" className={styles.aboutlink}>Planejart Projetados System</a>, a project that reflects my dedication to creating practical and functional solutions. Currently, I'm deepening my knowledge in <strong>Web Design</strong> to create even more intuitive and attractive interfaces.
                </p>

                <p className={styles.abouttext}>
                    When I'm not coding, you'll probably find me gaming or immersed in a good book. I'm always seeking new challenges and opportunities to learn and evolve as a <strong>web developer</strong>.
                </p>
            </section>
            <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '35%', padding: 30, paddingRight: 0}} >
                <img src="/imgs/eu.jpeg" alt="my-photo" className={styles.aboutimage} />
                <p style={{ fontSize: '1.2rem', marginTop: 10}}>That's me</p>
            </section>
            </>
        }
        </div>
    </>
}