import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
        alt="Logo Wild Code School"
      />
      <div>
        <p>
          <span>Réalisé par Gislaine de Aguiar Guimarães </span>
          <br />
          D'après une maquette de Jason en Anthestérion de l'an 515 avant JC
        </p>
      </div>
    </footer>
  )
}

export default Footer
