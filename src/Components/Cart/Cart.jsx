import { useSelector } from "react-redux"
import { CartItem } from "./CartItem"
import { getCartItems, getTotalPrice } from "../../redux/cartSlice"


export const Cart = () => {

    const cartItems = useSelector(getCartItems)
    const totalPrice = useSelector(getTotalPrice)

    return (<div className="cartBlock columnCenter">
        <div className="cart">
            <img className="cartIcon" width='70px' src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png"/>
            <h3>TOTAL: ${totalPrice}</h3>
        </div>
        {cartItems.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id}/>)}
    </div>)
}