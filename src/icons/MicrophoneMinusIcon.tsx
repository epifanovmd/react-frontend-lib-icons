import React, { FC, memo } from 'react';
import MicrophoneMinusSvg from '../svg/microphone-minus.svg';

export interface IMicrophoneMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrophoneMinusIcon: FC<IMicrophoneMinusIconProps> = memo(props => {
  return <MicrophoneMinusSvg {...props} />;
});
