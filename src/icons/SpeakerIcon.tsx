import React, { FC, memo } from 'react';
import SpeakerSvg from '../svg/speaker.svg';

export interface ISpeakerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpeakerIcon: FC<ISpeakerIconProps> = memo(props => {
  return <SpeakerSvg {...props} />;
});
