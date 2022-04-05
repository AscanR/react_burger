import React from 'react'
import {Button, ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerConstructor.module.css'
import PropTypes from "prop-types";
import Ingredients from "../ingredients/Ingredients";

const BurgerConstructor = ({data, setIsOrderDetailsOpened}) => {

    return (
          <section className={styles.section}>
              <div className={styles.elements}>
                  {data.filter(item => item._id === '60d3b41abdacab0026a733c6').map((item) => {
                      return <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={`${item.name} (верх)`}
                            price={item.price}
                            thumbnail={item.image}
                      />
                  })}
                  <div className={styles.variables}>
                      {data.filter(item => item.type !== 'bun').map((item) => {
                          return <Ingredients item={item} key={item._id}/>
                      })}
                  </div>
                  {data.filter(item => item._id === '60d3b41abdacab0026a733c6').map((item) => {
                      return <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={`${item.name} (низ)`}
                            price={item.price}
                            thumbnail={item.image}
                      />
                  })}
              </div>
              <div className={styles.total}>
                  <div className={styles.totalprice}>
                      <span className="text text_type_digits-medium mr-2">610</span>
                      <CurrencyIcon type="primary"/>
                  </div>
                  <Button type="primary" size="large" onClick={() => setIsOrderDetailsOpened(true)}>
                      Оформить заказ
                  </Button>
              </div>
          </section>
    )
}

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number,
        calories: PropTypes.number,
        price: PropTypes.number,
        image: PropTypes.string,
        image_mobile: PropTypes.string,
        image_large: PropTypes.string,
        __v: PropTypes.number
    })).isRequired,
    setIsOrderDetailsOpened: PropTypes.func.isRequired
}

export default BurgerConstructor