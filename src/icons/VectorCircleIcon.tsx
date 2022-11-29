import React, { FC, memo } from 'react';
import VectorCircleSvg from '../svg/vector-circle.svg';

export interface IVectorCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorCircleIcon: FC<IVectorCircleIconProps> = memo(props => {
  return <VectorCircleSvg {...props} />;
});
