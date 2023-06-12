import { useCardContext } from "./CardContext"

export default function CardInfo() {
  const { product } = useCardContext();
  return (
    <div className="text-lg font-semibold">
      {product.info}
    </div>
  )
}
