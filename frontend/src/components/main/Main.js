import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './Main.module.css'
import Form from '../form/Form'
import dayjs from 'dayjs'

function Main() {
  //Stocker les données à l'intérieur de state
  const [argonautes, setArgonautes] = useState([])

  //Pour dire que la fonction sera exécutée qu'après le rendu du composant
  const fetchArgonaute = async () => {
    try {
      const response = await axios.get(
        'https://argonaute-api.herokuapp.com/api/argonaute/getAllArgonautes'
      )
      setArgonautes(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchArgonaute()
  }, [])

  useEffect(() => {
    console.log(argonautes)
  }, [argonautes])

  console.log(argonautes.argonautes.length)
  return (
    <main className={styles.main}>
      <h2>Ajouter un(e) Argonaute</h2>
      <Form />
      <h2>Membres de l'équipage</h2>

      <div className={styles.divCard}>
        {argonautes.argonautes?.map((member, index) => {
          return (
            <div className={styles.card} key={index}>
              <h3>{member.name}</h3>
              <p>
                Qualité: <br /> <span>{member.quality}</span>
              </p>
              <p>
                Membre ajouté le{' '}
                <span>{dayjs(member.createdAt).format('DD/MM/YYYY')}</span>
              </p>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Main
