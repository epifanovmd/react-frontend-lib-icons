import React, { FC, memo } from 'react';
import EqualizerSvg from '../svg/equalizer.svg';

export interface IEqualizerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EqualizerIcon: FC<IEqualizerIconProps> = memo(props => {
  return <EqualizerSvg {...props} />;
});
