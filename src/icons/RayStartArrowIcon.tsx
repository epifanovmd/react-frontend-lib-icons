import React, { FC, memo } from 'react';
import RayStartArrowSvg from '../svg/ray-start-arrow.svg';

export interface IRayStartArrowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RayStartArrowIcon: FC<IRayStartArrowIconProps> = memo(props => {
  return <RayStartArrowSvg {...props} />;
});
