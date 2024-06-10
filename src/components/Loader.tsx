import { FC } from "react"

export const Loader: FC = () => {
  return (
    <div className="loader-wrapper">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
