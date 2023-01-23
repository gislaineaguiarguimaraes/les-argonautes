import styles from './Form.module.css'

import { useForm } from 'react-hook-form'

function Form() {
  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="name">Nom de l&apos;Argonaute</label>
        <input id="name" name="name" type="text" placeholder="Charalampos" />
      </div>
      <div>
        <label htmlFor="quality">Qualité de l&apos;Argonaute</label>
        <input
          id="quality"
          name="quality"
          type="text"
          placeholder="Prodigieux"
        />
      </div>
      <button type="submit">Envoyer</button>
    </form>
  )
}

export default Form
