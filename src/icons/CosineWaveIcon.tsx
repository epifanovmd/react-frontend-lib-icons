import React, { FC, memo } from 'react';
import CosineWaveSvg from '../svg/cosine-wave.svg';

export interface ICosineWaveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CosineWaveIcon: FC<ICosineWaveIconProps> = memo(props => {
  return <CosineWaveSvg {...props} />;
});
