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
    <path
      stroke="#33363F"
      strokeWidth={2}
      d="M16 21v-2c0-1.886 0-2.828-.586-3.414C14.828 15 13.886 15 12 15h-1c-1.886 0-2.828 0-3.414.586C7 16.172 7 17.114 7 19v2"
    />
    <path stroke="#33363F" strokeLinecap="round" strokeWidth={2} d="M7 8h5" />
    <path
      stroke="#33363F"
      strokeWidth={2}
      d="M3 9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h7.172c.408 0 .613 0 .796.076.184.076.329.22.618.51l2.828 2.828c.29.29.434.434.51.618.076.183.076.388.076.796V15c0 2.828 0 4.243-.879 5.121C19.243 21 17.828 21 15 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15V9Z"
    />
  </svg>
)
export default Save
