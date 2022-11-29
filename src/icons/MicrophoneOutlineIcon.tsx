import React, { FC, memo } from 'react';
import MicrophoneOutlineSvg from '../svg/microphone-outline.svg';

export interface IMicrophoneOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrophoneOutlineIcon: FC<IMicrophoneOutlineIconProps> = memo(props => {
  return <MicrophoneOutlineSvg {...props} />;
});
