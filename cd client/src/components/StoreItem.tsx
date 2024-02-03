import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  ItemId: number;
  ItemName: string;
  ItemPrice: number;
  ItemImage: string
};

export function StoreItem({ ItemId, ItemName, ItemPrice, ItemImage }: StoreItemProps) {

  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  const quantity = getItemQuantity(ItemId)


  return (
    <Card style={{ backgroundColor: "#f0f0f0", border: "2px solItemId #e0e0e0" }}>
      <Card.Img
        variant="top"
        src={ItemImage}
        style={{ objectFit: "cover", height: "200px" }}
      />
      <Card.Body>
        <Card.Title>{ItemName}</Card.Title>
        <div className="d-flex justify-content-between align-items-center">
          <div>{formatCurrency(ItemPrice)}</div>
          <div>
            {quantity === 0 ? (
              <Button onClick={() => increaseCartQuantity(ItemId)}>+ Add to Cart</Button>
            ) : (
              <div className="d-flex align-items-center" style={{ gap: ".5rem" }}>
                <Button onClick={() => decreaseCartQuantity(ItemId)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(ItemId)}>+</Button>
                <Button variant="danger" onClick={() => removeFromCart(ItemId)}>
                  Remove
                </Button>
              </div>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
