import React, { FC, memo } from 'react';
import ScaleUnbalancedSvg from '../svg/scale-unbalanced.svg';

export interface IScaleUnbalancedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScaleUnbalancedIcon: FC<IScaleUnbalancedIconProps> = memo(props => {
  return <ScaleUnbalancedSvg {...props} />;
});
