// taken from this video https://www.youtube.com/watch?v=vPRdY87_SH0
import { Product } from "@/App"
import { ReactNode } from "react"
import CardButton from "./CardButton"
import CardContext from "./CardContext"
import CardImage from "./CardImage"
import CardInfo from "./CardInfo"

type Props = {
  product: Product,
  image: ReactNode,
  info: ReactNode,
  action: ReactNode
}

export default function ComposibleCard({ image, info, action, product }: Props) {
  return (
    <CardContext.Provider value={{ product }} >
      <div className="h-30 w-30">
        {image}
        <div>
          {info}
          {action}
        </div>
      </div>
    </CardContext.Provider>
  )
}

ComposibleCard.Image = CardImage;
ComposibleCard.Info = CardInfo;
ComposibleCard.Button = CardButton;
