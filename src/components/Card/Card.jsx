import React from 'react'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Card.module.css'
import PropTypes from "prop-types";
import BurgerConstructor from "../burger-constructor/BurgerConstructor";

const Card = ({item}) => {
    return (
          <article className={styles.card}>
              <img src={item.image} alt={item.name} className={styles.img}/>
              <div className={styles.price}>
                  <span className="text text_type_digits-default mr-1">{item.price}</span>
                  <CurrencyIcon type="primary" />
              </div>
              <span className="text text_type_main-default">{item.name}</span>
          </article>
    )
}

Card.propTypes = {
    item: PropTypes.object.isRequired
}

export default Card