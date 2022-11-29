import React, { FC, memo } from 'react';
import ShieldCrownSvg from '../svg/shield-crown.svg';

export interface IShieldCrownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldCrownIcon: FC<IShieldCrownIconProps> = memo(props => {
  return <ShieldCrownSvg {...props} />;
});
