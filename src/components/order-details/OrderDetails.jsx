import React, {useContext, useEffect, useState} from 'react';
import styles from './OrderDetails.module.css'
import img from '../../images/donebutton.png'
import DataContext from "../data-context/DataContext";


const OrderDetails = () => {

    const {orderData} = useContext(DataContext)
    return (
          <div className={styles.container}>
              <h1 className="text text_type_digits-large">{orderData}</h1>
              <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
              <img src={img} alt="Готово" className={styles.img}/>
              <p className="text text_type_main-small mt-15">Ваш заказ начали готовить</p>
              <p className="text text_type_main-small text_color_inactive mt-2 mb-30">Дождитесь готовности на
                  орбитальной станции</p>
          </div>
    );
};

export default OrderDetails;