import * as React from "react"
import { SVGProps } from "react"
const Return = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#33363F"
      d="m20 10 .707.707.707-.707-.707-.707L20 10ZM3 18a1 1 0 1 0 2 0H3Zm12.707-2.293 5-5-1.414-1.414-5 5 1.414 1.414Zm5-6.414-5-5-1.414 1.414 5 5 1.414-1.414ZM20 9H10v2h10V9ZM3 16v2h2v-2H3Zm7-7a7 7 0 0 0-7 7h2a5 5 0 0 1 5-5V9Z"
    />
  </svg>
)
export default Return
