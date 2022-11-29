import React, { FC, memo } from 'react';
import ZWaveSvg from '../svg/z-wave.svg';

export interface IZWaveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ZWaveIcon: FC<IZWaveIconProps> = memo(props => {
  return <ZWaveSvg {...props} />;
});
