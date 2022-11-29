import React, { FC, memo } from 'react';
import MicrophoneSvg from '../svg/microphone.svg';

export interface IMicrophoneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrophoneIcon: FC<IMicrophoneIconProps> = memo(props => {
  return <MicrophoneSvg {...props} />;
});
