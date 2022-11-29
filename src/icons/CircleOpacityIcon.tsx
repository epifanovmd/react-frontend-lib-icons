import React, { FC, memo } from 'react';
import CircleOpacitySvg from '../svg/circle-opacity.svg';

export interface ICircleOpacityIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircleOpacityIcon: FC<ICircleOpacityIconProps> = memo(props => {
  return <CircleOpacitySvg {...props} />;
});
