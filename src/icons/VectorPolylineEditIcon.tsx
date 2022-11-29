import React, { FC, memo } from 'react';
import VectorPolylineEditSvg from '../svg/vector-polyline-edit.svg';

export interface IVectorPolylineEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorPolylineEditIcon: FC<IVectorPolylineEditIconProps> = memo(props => {
  return <VectorPolylineEditSvg {...props} />;
});
