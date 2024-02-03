


import { Button, NavItem, Offcanvas, Stack } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";


type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
 
  const handleTotalClick = () => {
    setIsCheckingOut(true);
  };

  return (
    <>
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {isCheckingOut ? (
            <Stack gap={3}>
              
            </Stack>
          ) : (
            <Stack gap={3}>
              {cartItems.map((item) => (
                <CartItem itemData={{
                  id: 0,
                  name: "",
                  imgUrl: "",
                  price: 0
                }} key={item.id} {...item} />
              ))}
              <div className="ms-auto fw-bold fs-5">
                Total{' '}
                {/* {formatCurrency(
                  cartItems.reduce((total, cartItem) => {
                    const item = storeItems.find((i) => i.id === cartItem.id);
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                )} */}
              </div>
              <Button onClick={handleTotalClick}>Checkout</Button>
            </Stack>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


