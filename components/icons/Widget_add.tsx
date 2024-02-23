import * as React from "react"
import { SVGProps } from "react"
const WidgetAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={7}
      height={7}
      x={3}
      y={3}
      stroke="#33363F"
      strokeLinecap="round"
      strokeWidth={2}
      rx={1}
    />
    <rect
      width={7}
      height={7}
      x={3}
      y={14}
      stroke="#33363F"
      strokeLinecap="round"
      strokeWidth={2}
      rx={1}
    />
    <rect
      width={7}
      height={7}
      x={14}
      y={3}
      stroke="#33363F"
      strokeLinecap="round"
      strokeWidth={2}
      rx={1}
    />
    <path
      stroke="#33363F"
      strokeLinecap="round"
      strokeWidth={2}
      d="M17.5 14v7M21 17.5h-7"
    />
  </svg>
)
export default WidgetAdd
