import React, { FC, memo } from 'react';
import SpeakerStopSvg from '../svg/speaker-stop.svg';

export interface ISpeakerStopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpeakerStopIcon: FC<ISpeakerStopIconProps> = memo(props => {
  return <SpeakerStopSvg {...props} />;
});
