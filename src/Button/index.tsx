import React, { FC, ReactElement, PropsWithChildren } from 'react'
import './button.scss'

export interface ButtonProps {
  onClick: () => void
}

export const Button: FC<ButtonProps> = (props: PropsWithChildren<ButtonProps>): ReactElement => (
  <button className={'btn'} onClick={props.onClick}>
    {props.children}
  </button>
)
