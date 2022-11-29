import React, { FC, memo } from 'react';
import FerrisWheelSvg from '../svg/ferris-wheel.svg';

export interface IFerrisWheelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FerrisWheelIcon: FC<IFerrisWheelIconProps> = memo(props => {
  return <FerrisWheelSvg {...props} />;
});
