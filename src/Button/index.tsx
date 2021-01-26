import React, { FC, ReactElement, PropsWithChildren } from 'react';
import './button.scss';

export interface ButtonProps {
  type?: 'primary';
}

export const Button: FC<ButtonProps> = (props: PropsWithChildren<ButtonProps>): ReactElement => {
  return <button className={props.type}>{props.children}</button>;
};
