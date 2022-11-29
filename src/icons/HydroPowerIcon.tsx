import React, { FC, memo } from 'react';
import HydroPowerSvg from '../svg/hydro-power.svg';

export interface IHydroPowerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HydroPowerIcon: FC<IHydroPowerIconProps> = memo(props => {
  return <HydroPowerSvg {...props} />;
});
