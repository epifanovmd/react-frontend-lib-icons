import React, { FC, memo } from 'react';
import HandWaveOutlineSvg from '../svg/hand-wave-outline.svg';

export interface IHandWaveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandWaveOutlineIcon: FC<IHandWaveOutlineIconProps> = memo(props => {
  return <HandWaveOutlineSvg {...props} />;
});
