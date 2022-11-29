import React, { FC, memo } from 'react';
import RayStartVertexEndSvg from '../svg/ray-start-vertex-end.svg';

export interface IRayStartVertexEndIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RayStartVertexEndIcon: FC<IRayStartVertexEndIconProps> = memo(props => {
  return <RayStartVertexEndSvg {...props} />;
});
