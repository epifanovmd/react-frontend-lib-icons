import React, { FC, memo } from 'react';
import HumanGreetingProximitySvg from '../svg/human-greeting-proximity.svg';

export interface IHumanGreetingProximityIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanGreetingProximityIcon: FC<IHumanGreetingProximityIconProps> = memo(props => {
  return <HumanGreetingProximitySvg {...props} />;
});
