import styles from './Main.module.css'
import Form from '../form/Form'

function Main() {
  return (
    <main className={styles.main}>
      <h2>Ajouter un(e) Argonaute</h2>
      <Form />
      <h2>Membres de l'équipage</h2>
      <ul>
        <li>Nomes</li>
      </ul>
    </main>
  )
}

export default Main
