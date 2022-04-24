import React from 'react'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './Card.module.css'
import PropTypes from "prop-types";
import dataType from "../../services/data-type/DataType";

const Card = ({item, setIsIngredientDetailsOpened, setCardData}) => {
    return (
          <article className={styles.card} onClick={() => {
              setIsIngredientDetailsOpened(true)
              setCardData(item)
          }}>
              <img src={item.image} alt={item.name} className={styles.img}/>
              <div className={styles.price}>
                  <span className="text text_type_digits-default mr-1">{item.price}</span>
                  <CurrencyIcon type="primary"/>
              </div>
              <span className="text text_type_main-default">{item.name}</span>
          </article>
    )
}

Card.propTypes = {
    item: dataType.isRequired,
    setIsIngredientDetailsOpened: PropTypes.func,
    setCardData: PropTypes.func
}

export default Card