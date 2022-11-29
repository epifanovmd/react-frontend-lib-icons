import React, { FC, memo } from 'react';
import VectorPolylineSvg from '../svg/vector-polyline.svg';

export interface IVectorPolylineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorPolylineIcon: FC<IVectorPolylineIconProps> = memo(props => {
  return <VectorPolylineSvg {...props} />;
});
