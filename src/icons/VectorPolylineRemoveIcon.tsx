import React, { FC, memo } from 'react';
import VectorPolylineRemoveSvg from '../svg/vector-polyline-remove.svg';

export interface IVectorPolylineRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorPolylineRemoveIcon: FC<IVectorPolylineRemoveIconProps> = memo(props => {
  return <VectorPolylineRemoveSvg {...props} />;
});
