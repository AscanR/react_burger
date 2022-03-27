import React from 'react'
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './AppHeader.module.css'

const AppHeader = () => {
    return (
          <header className={styles.AppHeader}>
            <div  className={styles.item}>
                <BurgerIcon type={"primary"} />
                <span className="text text_type_main-small ml-2">Конструктор</span>
            </div>
            <div style={{marginRight: 112}}className={styles.item}>
                  <ListIcon type={"secondary"} />
                  <span className="text text_type_main-small text_color_inactive ml-2">Лента заказов</span>
            </div>
            <Logo />
            <div style={{marginLeft: 288.88}}className={styles.item}>
                  <ProfileIcon type={"secondary"} />
                  <span className="text text_type_main-small text_color_inactive ml-2">Личный кабинет</span>
            </div>
          </header>
    )
}

export default AppHeader