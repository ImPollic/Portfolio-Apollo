import styles from "./tools.module.css"
import Carrousel from "./Carrousel"

export default function Tools ({ idioma }: { idioma: string }) {
    return (
        <div className={styles.tools} id="Ferramentas">
            { idioma === "pt" ? (
                <>
                    <p className={styles.toolstitle}> Ferramentas</p>
                    <p className={styles.toolsdesc}> Estou constantemente expandindo meu conhecimento técnico e aprimorando minhas habilidades. Estas são as tecnologias com as quais tenho mais experiência e que utilizo para desenvolver aplicações completas e escaláveis:</p>

                    <Carrousel idioma={idioma}/>

                </>
            ) : (
                <>
                    <p className={styles.toolstitle}> Tools</p>
                    <p className={styles.toolsdesc}> I am constantly expanding my technical knowledge and improving my skills. These are the technologies with which I have the most experience and that I use to develop complete and scalable applications:</p>
                    <Carrousel idioma={idioma}/>
                </>
            )}
        </div>
    )
}