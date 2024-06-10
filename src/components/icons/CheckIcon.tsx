import { FC } from "react"

export const CheckIcon: FC<{ active: boolean }> = ({ active }) => {
  return (
    <svg width={14} height={14} viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 3L3 5.5L8 0.5" stroke={active ? "#fff" : "#212121"} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
