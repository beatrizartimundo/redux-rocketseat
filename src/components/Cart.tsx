import { useSelector } from "react-redux"
import { ICartItem } from "../store/modules/cart/types"
import { IState} from '../store';

const Cart: React.FC = () => {
  const cart = useSelector<IState,ICartItem[]>(state => state.cart.items)

return (
  <table>
    <thead>
      <tr>
        <th>Produto</th>
        <th>Preco</th>
        <th>Quantidade</th>
        <th>Subtotal</th>
      </tr>
    </thead>
    <tbody>
      {cart.map(item => (
        <tr key={item.product.id}>
          <td>{item.product.title}</td>
          <td>{item.product.price}</td>
          <td>{item.quantity}</td>
          <td>{(item.product.price * item.quantity).toFixed(2)}</td>
        </tr>
      ))}
    </tbody>
  </table>
)
}
export default Cart;