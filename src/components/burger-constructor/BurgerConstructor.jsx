import React from 'react'
import {Button, ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerConstructor.module.css'
import PropTypes from "prop-types";
import Ingridients from "../ingridients/Ingridients";

const BurgerConstructor = ({data, setIsOrderDetailsOpened}) => {

    return (
          <section className={styles.section}>
              <div className={styles.elements}>
                  <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={20}
                        thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
                  />
                  <div className={styles.variables}>
                      {data.filter(item => item.type !== 'bun').map((item, index) => {
                          return <Ingridients item={item} key={item._id}/>
                      })}
                  </div>
                  <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={20}
                        thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
                  />
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
    data: PropTypes.array.isRequired
}

export default BurgerConstructor