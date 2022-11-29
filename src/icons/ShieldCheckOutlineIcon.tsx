import React, { FC, memo } from 'react';
import ShieldCheckOutlineSvg from '../svg/shield-check-outline.svg';

export interface IShieldCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldCheckOutlineIcon: FC<IShieldCheckOutlineIconProps> = memo(props => {
  return <ShieldCheckOutlineSvg {...props} />;
});
