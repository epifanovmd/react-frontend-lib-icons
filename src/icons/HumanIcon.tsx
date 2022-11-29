import React, { FC, memo } from 'react';
import HumanSvg from '../svg/human.svg';

export interface IHumanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanIcon: FC<IHumanIconProps> = memo(props => {
  return <HumanSvg {...props} />;
});
