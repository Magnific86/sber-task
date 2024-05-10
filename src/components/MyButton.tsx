import { FC } from "react"
import { Button } from "./styled"

type MyButtonProps = {
  id?: string
  text: string
  isActive?: boolean
  handler?: () => void
}

export const MyButton: FC<MyButtonProps> = ({ id, text, isActive, handler }) => {
  return (
    <Button id={id} active={isActive} onClick={handler}>
      {text}
    </Button>
  )
}
