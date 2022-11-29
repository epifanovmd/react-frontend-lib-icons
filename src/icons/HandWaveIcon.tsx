import React, { FC, memo } from 'react';
import HandWaveSvg from '../svg/hand-wave.svg';

export interface IHandWaveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandWaveIcon: FC<IHandWaveIconProps> = memo(props => {
  return <HandWaveSvg {...props} />;
});
