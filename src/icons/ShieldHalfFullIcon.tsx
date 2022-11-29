import React, { FC, memo } from 'react';
import ShieldHalfFullSvg from '../svg/shield-half-full.svg';

export interface IShieldHalfFullIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldHalfFullIcon: FC<IShieldHalfFullIconProps> = memo(props => {
  return <ShieldHalfFullSvg {...props} />;
});
