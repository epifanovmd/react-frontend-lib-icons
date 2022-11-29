import React, { FC, memo } from 'react';
import CircleMultipleSvg from '../svg/circle-multiple.svg';

export interface ICircleMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircleMultipleIcon: FC<ICircleMultipleIconProps> = memo(props => {
  return <CircleMultipleSvg {...props} />;
});
