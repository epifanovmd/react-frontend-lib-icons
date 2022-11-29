import React, { FC, memo } from 'react';
import VectorLineSvg from '../svg/vector-line.svg';

export interface IVectorLineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorLineIcon: FC<IVectorLineIconProps> = memo(props => {
  return <VectorLineSvg {...props} />;
});
