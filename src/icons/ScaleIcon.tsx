import React, { FC, memo } from 'react';
import ScaleSvg from '../svg/scale.svg';

export interface IScaleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScaleIcon: FC<IScaleIconProps> = memo(props => {
  return <ScaleSvg {...props} />;
});
