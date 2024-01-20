import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={29}
      height={29}
      viewBox="0 0 29 29"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_19)">
        <path
          d="M21.146 1.108A7.734 7.734 0 0014.5 5.096a7.734 7.734 0 00-6.646-3.988A8.217 8.217 0 000 9.627C0 17.813 13.24 27.269 13.802 27.67l.698.494.699-.494C15.762 27.27 29 17.813 29 9.627a8.217 8.217 0 00-7.854-8.519z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_19">
          <path fill="#fff" d="M0 0H29V29H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgComponent
