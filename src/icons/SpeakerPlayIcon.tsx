import React, { FC, memo } from 'react';
import SpeakerPlaySvg from '../svg/speaker-play.svg';

export interface ISpeakerPlayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpeakerPlayIcon: FC<ISpeakerPlayIconProps> = memo(props => {
  return <SpeakerPlaySvg {...props} />;
});
