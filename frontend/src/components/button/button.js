import styles from './button.module.css'

function Button({ type, text }) {
  return (
    <div className={styles.button}>
      <button type={type}>{text}</button>
    </div>
  )
}
export default Button
