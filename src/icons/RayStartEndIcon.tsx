import React, { FC, memo } from 'react';
import RayStartEndSvg from '../svg/ray-start-end.svg';

export interface IRayStartEndIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RayStartEndIcon: FC<IRayStartEndIconProps> = memo(props => {
  return <RayStartEndSvg {...props} />;
});
