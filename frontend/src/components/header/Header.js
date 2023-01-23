import styles from './Header.module.css'
import Logo from '../../images/ship-transparent-png-18.png'

function Header() {
  return (
    <header className={styles.header}>
      <img
        src={Logo}
        /*"https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"*/
        alt="Logo Bateau"
      />
      <h1>Les Argonautes</h1>
    </header>
  )
}

export default Header
