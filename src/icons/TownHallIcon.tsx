import React, { FC, memo } from 'react';
import TownHallSvg from '../svg/town-hall.svg';

export interface ITownHallIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TownHallIcon: FC<ITownHallIconProps> = memo(props => {
  return <TownHallSvg {...props} />;
});
