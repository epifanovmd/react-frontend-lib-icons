import React, { FC, memo } from 'react';
import MushroomOutlineSvg from '../svg/mushroom-outline.svg';

export interface IMushroomOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MushroomOutlineIcon: FC<IMushroomOutlineIconProps> = memo(props => {
  return <MushroomOutlineSvg {...props} />;
});
