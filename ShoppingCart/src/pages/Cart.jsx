import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart, removeFromCart } from '../features/cartSlice';



const Cart = () => {

const cartItems = useSelector((state) => state.cart.cartItems);
const dispatch = useDispatch()

const total = cartItems.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
);

  return (
    <div>
      <h2>Your Cart </h2>

      {cartItems.length === 0 ? (
        <p>Your Cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-3"
              >
                <div>
                  <h4>{item.title}</h4>
                  <p>
                    ${item.price} x {item.quantity}
                  </p>
                </div>
                <button
                  className="text-red-500"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <h3 className="text-xl font-semibold mt-4">
            Total: ${total.toFixed(2)}
          </h3>
          <button
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart
