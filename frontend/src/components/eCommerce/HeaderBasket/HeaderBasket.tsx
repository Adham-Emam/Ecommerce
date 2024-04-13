import Logo from "@assets/cart.svg?react";
import styles from "./styles.module.css";

const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {
  return (
    <div className={basketContainer}>
      <Logo title="Cart" />
      <div className={basketQuantity}>0</div>
    </div>
  );
};

export default HeaderBasket;
