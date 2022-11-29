import React, { FC, memo } from 'react';
import MicrophoneOffSvg from '../svg/microphone-off.svg';

export interface IMicrophoneOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrophoneOffIcon: FC<IMicrophoneOffIconProps> = memo(props => {
  return <MicrophoneOffSvg {...props} />;
});
