import React, { FC, memo } from 'react';
import BrushOffSvg from '../svg/brush-off.svg';

export interface IBrushOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BrushOffIcon: FC<IBrushOffIconProps> = memo(props => {
  return <BrushOffSvg {...props} />;
});
