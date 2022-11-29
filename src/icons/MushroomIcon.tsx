import React, { FC, memo } from 'react';
import MushroomSvg from '../svg/mushroom.svg';

export interface IMushroomIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MushroomIcon: FC<IMushroomIconProps> = memo(props => {
  return <MushroomSvg {...props} />;
});
