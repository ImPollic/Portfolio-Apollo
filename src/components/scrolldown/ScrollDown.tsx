import styles from './ScrollDown.module.css'
import "animate.css"

export function ScrollDown({ idioma } : { idioma: string }) {
  return (
    <div className={styles.scrolldiv}>
      <p className={`${styles.p} animate__animated animate__pulse animate__infinite animate__slow`}>
        {idioma === "pt" ? "Role para baixo" : "Scroll down"}
      </p>
      <p className={`${styles.p} animate__animated animate__pulse animate__infinite animate__slow`}>
        v
      </p>
    </div>
  )
}

export function ScrollDownTwo({ idioma } : { idioma: string }) {
  return (
    <div className={`${styles.scrolldiv} ${styles.scrolldivto}`}>
      <p className={`${styles.pD}`}>
        {idioma === "pt" 
        ? '"A melhor maneira de prever o futuro é inventá-lo." -Alan Kay' 
        : '"The best way to predict the future is to invent it." - Alan Kay' }
      </p>
    </div>
  )
}
/*
export function ScrollDownTwo({ idioma } : { idioma: string }) {
  return (
    <div className={styles.scrolldiv}>
      <p className={`${styles.p}`}>
        {idioma === "pt" ? "Continue a explorar" : "Continue to explore"}
      </p>
      <p className={`${styles.p}`}>
        v
      </p>
    </div>
  )
}
*/