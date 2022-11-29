import React, { FC, memo } from 'react';
import ShieldCarSvg from '../svg/shield-car.svg';

export interface IShieldCarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldCarIcon: FC<IShieldCarIconProps> = memo(props => {
  return <ShieldCarSvg {...props} />;
});
