import React, { FC, memo } from 'react';
import HorseHumanSvg from '../svg/horse-human.svg';

export interface IHorseHumanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HorseHumanIcon: FC<IHorseHumanIconProps> = memo(props => {
  return <HorseHumanSvg {...props} />;
});
