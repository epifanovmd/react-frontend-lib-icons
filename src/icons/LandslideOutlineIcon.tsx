import React, { FC, memo } from 'react';
import LandslideOutlineSvg from '../svg/landslide-outline.svg';

export interface ILandslideOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LandslideOutlineIcon: FC<ILandslideOutlineIconProps> = memo(props => {
  return <LandslideOutlineSvg {...props} />;
});
