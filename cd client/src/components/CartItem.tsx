import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
  itemData: {
    id: number;
    name: string;
    imgUrl: string;
    price: number;
   }
}

export function CartItem({ quantity, itemData }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  return (
    <>
      <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img
          src={itemData.imgUrl}
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        <div className="me-auto">
          <div>
            {itemData.name} {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                x{quantity}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {formatCurrency(itemData.price)}
          </div>
        </div>

        <div>{formatCurrency(itemData.price * quantity)}</div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(itemData.id)}
        >
          &times;
        </Button>
      </Stack>
    </>
  );
}
