import { useCardContext } from "./CardContext"

export default function CardImage() {
  const { product } = useCardContext();
  return (
    <div className="h-30 w-30">
      <img src={product.image} />
    </div>
  )
}
