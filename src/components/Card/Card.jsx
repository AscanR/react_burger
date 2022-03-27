import React from 'react'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Card.module.css'

const Card = ({item}) => {
    return (
          <article className={styles.card}>
              <img src={item.image} alt={item.name} className={styles.img}/>
              <div className={styles.price}>
                  <span className="text text_type_digits-default mr-1">{item.price}</span>
                  <CurrencyIcon type="primary" />
              </div>
              <span className="text text_type_main-default" style={{textAlign: "center"}}>{item.name}</span>
          </article>
    )
}

export default Card