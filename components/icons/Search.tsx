import * as React from "react"
import { SVGProps } from "react"
const Save = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={11} cy={11} r={7} stroke="#33363F" strokeWidth={2} />
    <path
      stroke="#33363F"
      strokeLinecap="round"
      strokeWidth={2}
      d="m20 20-3-3"
    />
  </svg>
)
export default Save