import * as React from "react"
import { SVGProps } from "react"
const Expand_down = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path stroke="#33363F" strokeWidth={2} d="m18 9-6 6-6-6" />
  </svg>
)
export default Expand_down
