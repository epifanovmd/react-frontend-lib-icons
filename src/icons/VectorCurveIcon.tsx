import React, { FC, memo } from 'react';
import VectorCurveSvg from '../svg/vector-curve.svg';

export interface IVectorCurveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorCurveIcon: FC<IVectorCurveIconProps> = memo(props => {
  return <VectorCurveSvg {...props} />;
});
