import React, { FC, memo } from 'react';
import ShieldStarSvg from '../svg/shield-star.svg';

export interface IShieldStarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldStarIcon: FC<IShieldStarIconProps> = memo(props => {
  return <ShieldStarSvg {...props} />;
});
