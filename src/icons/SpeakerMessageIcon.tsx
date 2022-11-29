import React, { FC, memo } from 'react';
import SpeakerMessageSvg from '../svg/speaker-message.svg';

export interface ISpeakerMessageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpeakerMessageIcon: FC<ISpeakerMessageIconProps> = memo(props => {
  return <SpeakerMessageSvg {...props} />;
});
