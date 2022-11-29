import React, { FC, memo } from 'react';
import VectorArrangeAboveSvg from '../svg/vector-arrange-above.svg';

export interface IVectorArrangeAboveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VectorArrangeAboveIcon: FC<IVectorArrangeAboveIconProps> = memo(props => {
  return <VectorArrangeAboveSvg {...props} />;
});
