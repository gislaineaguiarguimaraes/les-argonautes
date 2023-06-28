import styles from './Header.module.css'
import Logo from '../../images/bateau2.png'

function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo Bateau" />
      <h1>Les Argonautes</h1>
    </header>
  )
}

export default Header
