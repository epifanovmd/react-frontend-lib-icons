import React, { FC, memo } from 'react';
import EqualizerOutlineSvg from '../svg/equalizer-outline.svg';

export interface IEqualizerOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EqualizerOutlineIcon: FC<IEqualizerOutlineIconProps> = memo(props => {
  return <EqualizerOutlineSvg {...props} />;
});
