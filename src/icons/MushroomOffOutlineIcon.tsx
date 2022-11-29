import React, { FC, memo } from 'react';
import MushroomOffOutlineSvg from '../svg/mushroom-off-outline.svg';

export interface IMushroomOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MushroomOffOutlineIcon: FC<IMushroomOffOutlineIconProps> = memo(props => {
  return <MushroomOffOutlineSvg {...props} />;
});
