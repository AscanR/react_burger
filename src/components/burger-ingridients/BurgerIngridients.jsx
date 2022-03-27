import React from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerIngridients.module.css'
import Card from "../Card/Card";
import PropTypes from 'prop-types'

const BurgerIngridients = (props) => {
    const [current, setCurrent] = React.useState('one')
    return (
          <section className={styles.BurgerIngridients}>
              <p className="text text_type_main-large">Соберите бургер</p>
              <nav className={styles.nav}>
                  <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                      Булки
                  </Tab>
                  <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                      Соусы
                  </Tab>
                  <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                      Начинки
                  </Tab>
              </nav>
              <div className={styles.ingridients}>
                  <p className="text text_type_main-default">Булки</p>
                  <div className={styles.grid}>
                      {props.data.filter(item => item.type === 'bun').map((item, index) => {
                          return <Card item={item} key={index}/>
                      })}
                  </div>
                  <p className="text text_type_main-default">Соусы</p>
                  <div className={styles.grid}>
                      {props.data.filter(item => item.type === 'sauce').map((item, index) => {
                          return <Card item={item} key={index}/>
                      })}
                  </div>
                  <p className="text text_type_main-default">Начинки</p>
                  <div className={styles.grid}>
                      {props.data.filter(item => item.type === 'main').map((item, index) => {
                          return <Card item={item} key={index}/>
                      })}
                  </div>
              </div>
          </section>
    )
}

BurgerIngridients.propTypes = {
    data: PropTypes.array
}

export default BurgerIngridients