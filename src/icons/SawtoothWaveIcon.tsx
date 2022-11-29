import React, { FC, memo } from 'react';
import SawtoothWaveSvg from '../svg/sawtooth-wave.svg';

export interface ISawtoothWaveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SawtoothWaveIcon: FC<ISawtoothWaveIconProps> = memo(props => {
  return <SawtoothWaveSvg {...props} />;
});
