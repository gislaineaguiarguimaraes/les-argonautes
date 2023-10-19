import styles from './Footer.module.css'
import Logo from '../../images/logo-ecole.png'

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={Logo} alt="Logo Wild Code School" />
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
