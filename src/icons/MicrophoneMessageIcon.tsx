import React, { FC, memo } from 'react';
import MicrophoneMessageSvg from '../svg/microphone-message.svg';

export interface IMicrophoneMessageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrophoneMessageIcon: FC<IMicrophoneMessageIconProps> = memo(props => {
  return <MicrophoneMessageSvg {...props} />;
});
