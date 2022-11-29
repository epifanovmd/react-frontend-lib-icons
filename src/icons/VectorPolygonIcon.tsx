import React, { FC, memo } from 'react';
import VectorPolygonSvg from '../svg/vector-polygon.svg';

export interface IVectorPolygonIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorPolygonIcon: FC<IVectorPolygonIconProps> = memo(props => {
  return <VectorPolygonSvg {...props} />;
});
