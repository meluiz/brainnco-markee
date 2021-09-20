/* ------| Estilos |------ */
import { Saved, Saving } from './style'

/* ------| Tipagem |------ */
type IconType = {
  size?: number
}

export const FileIcon = ({ size = 24 }: IconType) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M14 2.88062H6C5.46957 2.88062 4.96086 3.09133 4.58579 3.4664C4.21071 3.84147 4 4.35018 4 4.88062V20.8806C4 21.411 4.21071 21.9198 4.58579 22.2948C4.96086 22.6699 5.46957 22.8806 6 22.8806H18C18.5304 22.8806 19.0391 22.6699 19.4142 22.2948C19.7893 21.9198 20 21.411 20 20.8806V8.88062L14 2.88062Z'
        stroke='currentColor'
        strokeOpacity='0.65'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14 2.88062V8.88062H20'
        stroke='currentColor'
        strokeOpacity='0.65'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16 13.8806H8'
        stroke='currentColor'
        strokeOpacity='0.65'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16 17.8806H8'
        stroke='currentColor'
        strokeOpacity='0.65'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10 9.88062H9H8'
        stroke='currentColor'
        strokeOpacity='0.65'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const SavingIcon = ({ size = 24 }: IconType) => {
  return (
    <Saving
      width={size}
      height={size}
      viewBox='0 0 13 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6.72796 12.5C7.0041 12.5 7.22796 12.2761 7.22796 12C7.22796 11.7239 7.0041 11.5 6.72796 11.5V12.5ZM6.72796 1L6.73143 0.5H6.72796V1ZM11.4394 7.43558C11.4037 7.70941 11.5968 7.96029 11.8706 7.99594C12.1445 8.03159 12.3954 7.8385 12.431 7.56467L11.4394 7.43558ZM6.72796 11.5C3.8213 11.5 1.5 9.24248 1.5 6.5H0.5C0.5 9.83265 3.30768 12.5 6.72796 12.5V11.5ZM1.5 6.5C1.5 3.75752 3.8213 1.5 6.72796 1.5V0.5C3.30768 0.5 0.5 3.16735 0.5 6.5H1.5ZM6.72449 1.49999C8.10469 1.50956 9.39878 2.07832 10.2879 3.08833C11.1723 4.09284 11.6829 5.56502 11.4394 7.43558L12.431 7.56467C12.7082 5.43522 12.1304 3.66785 11.0385 2.42756C9.95148 1.19276 8.38159 0.511459 6.73143 0.500012L6.72449 1.49999Z'
        fill='currentColor'
      />
    </Saving>
  )
}

export const SavedIcon = ({ size = 24 }: IconType) => {
  return (
    <Saved
      width={size}
      height={size}
      viewBox='0 0 14 10'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13 1L4.75 9.25L1 5.5'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
    </Saved>
  )
}

export const MenuIcon = ({ size = 24 }: IconType) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path
        stroke='none'
        d='M0 0h24v24H0z'
        fill='none'
      />
      <line
        x1='4'
        y1='8'
        x2='20'
        y2='8'
      />
      <line
        x1='4'
        y1='16'
        x2='20'
        y2='16'
      />
    </svg>
  )
}

export const EyeIcon = ({ size = 24 }: IconType) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path
        stroke='none' d='M0 0h24v24H0z'
        fill='none'
      />
      <circle
        cx='12'
        cy='12'
        r='2'
      />
      <path
        d='M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7'
      />
    </svg>
  )
}

export const EyeOffIcon = ({ size = 24 }: IconType) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path
        stroke='none'
        d='M0 0h24v24H0z'
        fill='none'
      />
      <line
        x1='3'
        y1='3'
        x2='21'
        y2='21'
      />
      <path
        d='M10.584 10.587a2 2 0 0 0 2.828 2.83'
      />
      <path
        d='M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341'
      />
    </svg>
  )
}
