import React, { FC, memo } from 'react';
import HockeySticksSvg from '../svg/hockey-sticks.svg';

export interface IHockeySticksIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HockeySticksIcon: FC<IHockeySticksIconProps> = memo(props => {
  return <HockeySticksSvg {...props} />;
});
