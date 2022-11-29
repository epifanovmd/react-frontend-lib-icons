import React, { FC, memo } from 'react';
import HorseSvg from '../svg/horse.svg';

export interface IHorseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HorseIcon: FC<IHorseIconProps> = memo(props => {
  return <HorseSvg {...props} />;
});
