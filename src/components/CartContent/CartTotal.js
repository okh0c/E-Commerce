import { dataContext } from "../Context/DataContext"
import { useContext } from "react"

const CartTotal = () => {
const { cart } = useContext(dataContext);
const total = cart.reduce((acc, el)=> acc + el.price, 0);
  return <div className="cartTotal">
    <h3>Precio total: {total} $</h3>
  </div>
};

export default CartTotal