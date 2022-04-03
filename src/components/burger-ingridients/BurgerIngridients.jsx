import React from 'react'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerIngridients.module.css'
import Card from "../card/Card";
import PropTypes from 'prop-types'


const BurgerIngridients = ({setIsIngredientDetailsOpened, setCardData, data}) => {
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
                      {data.filter(item => item.type === 'bun').map((item, index) => {
                          return <Card
                                setCardData={setCardData}
                                item={item}
                                key={item._id}
                                setIsIngredientDetailsOpened={setIsIngredientDetailsOpened}
                          />
                      })}
                  </div>
                  <p className="text text_type_main-default">Соусы</p>
                  <div className={styles.grid}>
                      {data.filter(item => item.type === 'sauce').map((item, index) => {
                          return <Card
                                setCardData={setCardData}
                                item={item}
                                key={item._id}
                                setIsIngredientDetailsOpened={setIsIngredientDetailsOpened}
                          />
                      })}
                  </div>
                  <p className="text text_type_main-default">Начинки</p>
                  <div className={styles.grid}>
                      {data.filter(item => item.type === 'main').map((item, index) => {
                          return <Card item={item}
                                       setCardData={setCardData}
                                       key={item._id}
                                       setIsIngredientDetailsOpened={setIsIngredientDetailsOpened}
                          />
                      })}
                  </div>
              </div>
          </section>
    )
}

BurgerIngridients.propTypes = {
    data: PropTypes.array.isRequired
}

export default BurgerIngridients