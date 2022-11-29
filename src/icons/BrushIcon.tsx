import React, { FC, memo } from 'react';
import BrushSvg from '../svg/brush.svg';

export interface IBrushIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BrushIcon: FC<IBrushIconProps> = memo(props => {
  return <BrushSvg {...props} />;
});
