import React from 'react'
import axios from 'axios'
import Button from '../button/button'
import styles from './Form.module.css'

//Importer la bibliothèque react-hook-form pour créer le formulaire
import { useForm } from 'react-hook-form'

//Importer yup pour valider les données du formulaire
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const validationArgonaute = yup.object().shape({
  name: yup
    .string()
    .required("Le nom de l'argonaute est obligatoire")
    .min(2, 'Le nom doit comporter au moins 2 caractères'),
  quality: yup
    .string()
    .required("la qualité de l'argonaute est indispensable")
    .min(2, 'La qualité doit comporter au moins 2 caractères'),
})

function Form() {
  const {
    register, //pour spécifier les inputs qui seront enregistrées
    handleSubmit, //gérer l'envoi des informations
    formState: { errors }, //pour signaler une erreur lors de la validation
  } = useForm({ resolver: yupResolver(validationArgonaute) })

  const addArgonaute = (data) =>
    axios
      .post(
        'https://argonaute-api.herokuapp.com/api/argonaute/createArgonaute',
        data
      )
      .then(() => {
        console.log('Argonaute enregistré avec succès')
        window.location.reload(false)
      })
      .catch(() => {
        "ERREUR: L'argonaute n'a pas pu être enregistré"
      })

  return (
    <form className={styles.form} onSubmit={handleSubmit(addArgonaute)}>
      <div>
        <label htmlFor="name">Nom de l&apos;Argonaute</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Charalampos"
          {...register('name')}
        />
        <p>{errors.name?.message}</p>
      </div>
      <div>
        <label htmlFor="quality">Qualité de l&apos;Argonaute</label>
        <input
          id="quality"
          name="quality"
          type="text"
          placeholder="Prodigieux"
          {...register('quality')}
        />
        <p>{errors.quality?.message}</p>
      </div>
      <Button type="submit" text="Envoyer" />
    </form>
  )
}

export default Form
