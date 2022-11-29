import React, { FC, memo } from 'react';
import RayEndArrowSvg from '../svg/ray-end-arrow.svg';

export interface IRayEndArrowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RayEndArrowIcon: FC<IRayEndArrowIconProps> = memo(props => {
  return <RayEndArrowSvg {...props} />;
});
