import React from 'react';
import styles from "./Inridients.module.css";
import img from "../../images/bullets.svg";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const Ingridients = ({item}) => {
    return (
          <div className={styles.element}>
              <img src={img} alt="детализация" className={styles.img}/>
              <ConstructorElement
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
              />
          </div>
    );
};

Ingridients.propTypes = {
    item: PropTypes.object.isRequired
}

export default Ingridients;