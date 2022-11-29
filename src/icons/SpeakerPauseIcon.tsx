import React, { FC, memo } from 'react';
import SpeakerPauseSvg from '../svg/speaker-pause.svg';

export interface ISpeakerPauseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpeakerPauseIcon: FC<ISpeakerPauseIconProps> = memo(props => {
  return <SpeakerPauseSvg {...props} />;
});
