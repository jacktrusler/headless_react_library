import { Product } from "@/App";
import { createContext, useContext } from "react";

const CardContext = createContext<{ product: Product } | null>(null);

export function useCardContext() {
  const context = useContext(CardContext)
  if (!context) {
    throw new Error("Card.* component must be rendered as child of Card");
  }
  return context;
}

export default CardContext;
