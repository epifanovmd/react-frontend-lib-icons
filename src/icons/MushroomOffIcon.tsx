import React, { FC, memo } from 'react';
import MushroomOffSvg from '../svg/mushroom-off.svg';

export interface IMushroomOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MushroomOffIcon: FC<IMushroomOffIconProps> = memo(props => {
  return <MushroomOffSvg {...props} />;
});
