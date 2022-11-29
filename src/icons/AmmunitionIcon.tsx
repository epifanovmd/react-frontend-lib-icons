import React, { FC, memo } from 'react';
import AmmunitionSvg from '../svg/ammunition.svg';

export interface IAmmunitionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AmmunitionIcon: FC<IAmmunitionIconProps> = memo(props => {
  return <AmmunitionSvg {...props} />;
});
