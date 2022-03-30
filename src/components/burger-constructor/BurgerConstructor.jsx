import React from 'react'
import {Button, ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerConstructor.module.css'
import img from '../../images/bullets.svg'
import PropTypes from "prop-types";
import BurgerIngridients from "../burger-ingridients/BurgerIngridients";

const BurgerConstructor = (props) => {
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
                      <div className={styles.element}>
                          <img src={img} alt="детализация" className={styles.img}/>
                          <ConstructorElement
                                text="Соус традиционный галактический"
                                price={30}
                                thumbnail={"https://code.s3.yandex.net/react/code/sauce-03.png"}
                          />
                      </div>
                      <div className={styles.element}>
                          <img src={img} alt="детализация" className={styles.img}/>
                          <ConstructorElement
                                text="Мясо бессмертных моллюсков Protostomia"
                                price={300}
                                thumbnail={"https://code.s3.yandex.net/react/code/meat-02.png"}
                          />
                      </div>
                      <div className={styles.element}>
                          <img src={img} alt="детализация" className={styles.img}/>
                          <ConstructorElement
                                text="Плоды Фалленианского дерева"
                                price={80}
                                thumbnail={"https://code.s3.yandex.net/react/code/sp_1.png"}
                          />
                      </div>
                      <div className={styles.element}>
                          <img src={img} alt="детализация" className={styles.img}/>
                          <ConstructorElement
                                text="Хрустящие минеральные кольца"
                                price={80}
                                thumbnail={"https://code.s3.yandex.net/react/code/mineral_rings.png"}
                          />
                      </div>
                      <div className={styles.element}>
                          <img src={img} alt="детализация" className={styles.img}/>
                          <ConstructorElement
                                text="Хрустящие минеральные кольца"
                                price={80}
                                thumbnail={"https://code.s3.yandex.net/react/code/mineral_rings.png"}
                          />
                      </div>
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
                  <Button type="primary" size="large">
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