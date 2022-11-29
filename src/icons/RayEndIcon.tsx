import React, { FC, memo } from 'react';
import RayEndSvg from '../svg/ray-end.svg';

export interface IRayEndIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RayEndIcon: FC<IRayEndIconProps> = memo(props => {
  return <RayEndSvg {...props} />;
});
