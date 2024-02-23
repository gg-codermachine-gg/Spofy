import * as React from "react"
import { SVGProps } from "react"
const Globe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={8} stroke="#fff" strokeWidth={2} />
    <ellipse cx={12} cy={12} stroke="#fff" strokeWidth={2} rx={3} ry={8} />
    <path stroke="#fff" strokeLinecap="round" strokeWidth={2} d="M4 12h16" />
  </svg>
)
export default Globe
