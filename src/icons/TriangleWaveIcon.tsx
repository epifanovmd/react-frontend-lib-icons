import React, { FC, memo } from 'react';
import TriangleWaveSvg from '../svg/triangle-wave.svg';

export interface ITriangleWaveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TriangleWaveIcon: FC<ITriangleWaveIconProps> = memo(props => {
  return <TriangleWaveSvg {...props} />;
});
