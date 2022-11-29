import React, { FC, memo } from 'react';
import VectorPolylineMinusSvg from '../svg/vector-polyline-minus.svg';

export interface IVectorPolylineMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorPolylineMinusIcon: FC<IVectorPolylineMinusIconProps> = memo(props => {
  return <VectorPolylineMinusSvg {...props} />;
});
