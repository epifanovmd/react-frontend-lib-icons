import React, { FC, memo } from 'react';
import ScaleOffSvg from '../svg/scale-off.svg';

export interface IScaleOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScaleOffIcon: FC<IScaleOffIconProps> = memo(props => {
  return <ScaleOffSvg {...props} />;
});
