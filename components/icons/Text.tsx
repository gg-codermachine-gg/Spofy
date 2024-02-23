import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M18.387 4.5H5.62l-.124 3.691h.718c.39-2.317 1.138-2.676 4.04-2.768l.636-.02v11.74c0 .995-.215 1.23-1.948 1.384v.78h6.121v-.78c-1.743-.154-1.958-.39-1.958-1.384V5.403l.646.02c2.902.092 3.65.451 4.04 2.768h.718L18.387 4.5Z"
    />
  </svg>
)
export default SvgComponent
