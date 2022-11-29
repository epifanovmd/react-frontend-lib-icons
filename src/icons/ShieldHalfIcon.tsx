import React, { FC, memo } from 'react';
import ShieldHalfSvg from '../svg/shield-half.svg';

export interface IShieldHalfIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldHalfIcon: FC<IShieldHalfIconProps> = memo(props => {
  return <ShieldHalfSvg {...props} />;
});
