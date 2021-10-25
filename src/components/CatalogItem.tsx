import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
// import { IState } from "../store";
import { addProductToCart } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({product}) => {
  const dispatch = useDispatch();

  // const hasFailedStockCheck = useSelector<IState,boolean>(state => {
  //   return state.cart.failedStockCheck.includes(product.id);
  // });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch,product]);
  
  return(
    <article>
      <article>
          <strong>{product.title}</strong>{" - "}
          <strong>{product.price}</strong>{"  "}

          <button 
          type="button"
          onClick={handleAddProductToCart}
          >Comprar</button>

          {/* {hasFailedStockCheck && <span style={{color: 'red'}}>Falta de estoque</span>} */}
        </article>
    </article>
  )
}

export default CatalogItem;