import React, { FC, memo } from 'react';
import RayVertexSvg from '../svg/ray-vertex.svg';

export interface IRayVertexIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RayVertexIcon: FC<IRayVertexIconProps> = memo(props => {
  return <RayVertexSvg {...props} />;
});
