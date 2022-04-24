import React, {useContext} from 'react'
import {Button, ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerConstructor.module.css'
import PropTypes from "prop-types";
import Ingredients from "../ingredients/Ingredients";
import DataContext from "../../services/data-context/DataContext";
import {sendOrder} from "../../utils/sendOrder/sendOrder";

const BurgerConstructor = ({setIsOrderDetailsOpened}) => {

    const {data} = useContext(DataContext)
    const {setOrderData} = useContext(DataContext)

    return (
          <section className={styles.section}>
              <div className={styles.elements}>
                  {data.filter(item => item._id === '60d3b41abdacab0026a733c6').map((item) => {
                      return <ConstructorElement
                            key={item._id}
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
                            key={item._id}
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
                  <Button type="primary"
                          size="large"
                          onClick={() => {
                              setIsOrderDetailsOpened(true)
                              sendOrder(data)
                                    .then(data => {
                                        setOrderData(data.order.number)
                                    })
                                    .catch(err => console.log(err))
                          }}
                  >
                      Оформить заказ
                  </Button>
              </div>
          </section>
    )
}

BurgerConstructor.propTypes = {
    setIsOrderDetailsOpened: PropTypes.func.isRequired
}

export default BurgerConstructor