import React, { FC, memo } from 'react';
import SquareWaveSvg from '../svg/square-wave.svg';

export interface ISquareWaveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SquareWaveIcon: FC<ISquareWaveIconProps> = memo(props => {
  return <SquareWaveSvg {...props} />;
});
