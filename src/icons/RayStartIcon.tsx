import React, { FC, memo } from 'react';
import RayStartSvg from '../svg/ray-start.svg';

export interface IRayStartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RayStartIcon: FC<IRayStartIconProps> = memo(props => {
  return <RayStartSvg {...props} />;
});
