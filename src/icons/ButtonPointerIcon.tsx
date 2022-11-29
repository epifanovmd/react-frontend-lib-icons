import React, { FC, memo } from 'react';
import ButtonPointerSvg from '../svg/button-pointer.svg';

export interface IButtonPointerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ButtonPointerIcon: FC<IButtonPointerIconProps> = memo(props => {
  return <ButtonPointerSvg {...props} />;
});
