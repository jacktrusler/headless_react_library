import { useCardContext } from "./CardContext"

export default function CardButton() {
  const { product } = useCardContext();
  return (
    <div className="h-16 w-40">
      <button>{product.action}</button>
    </div>
  )
}
