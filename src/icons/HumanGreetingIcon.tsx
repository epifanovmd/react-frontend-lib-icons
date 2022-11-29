import React, { FC, memo } from 'react';
import HumanGreetingSvg from '../svg/human-greeting.svg';

export interface IHumanGreetingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanGreetingIcon: FC<IHumanGreetingIconProps> = memo(props => {
  return <HumanGreetingSvg {...props} />;
});
