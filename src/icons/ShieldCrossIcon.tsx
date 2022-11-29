import React, { FC, memo } from 'react';
import ShieldCrossSvg from '../svg/shield-cross.svg';

export interface IShieldCrossIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldCrossIcon: FC<IShieldCrossIconProps> = memo(props => {
  return <ShieldCrossSvg {...props} />;
});
