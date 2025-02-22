import { useContext } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import CartProductItem from "../[productId]/components/cart-product-item";
import { CartContext } from "../contexts/cart";

const CartSheet = () => {
  const { isOpen, toggleCard, products } = useContext(CartContext);
  return (
    <Sheet open={isOpen} onOpenChange={toggleCard}>
      <SheetContent className="w-[80%]">
        <SheetHeader>
          <SheetTitle className="text-left">Sacola</SheetTitle>
        </SheetHeader>
        <div className="py-5">
          {products.map((product) => (
            <CartProductItem product={product} key={product.id} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
