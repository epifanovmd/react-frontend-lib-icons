import React, { FC, memo } from 'react';
import CheckOutlineSvg from '../svg/check-outline.svg';

export interface ICheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckOutlineIcon: FC<ICheckOutlineIconProps> = memo(props => {
  return <CheckOutlineSvg {...props} />;
});
