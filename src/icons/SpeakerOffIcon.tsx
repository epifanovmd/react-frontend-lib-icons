import React, { FC, memo } from 'react';
import SpeakerOffSvg from '../svg/speaker-off.svg';

export interface ISpeakerOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpeakerOffIcon: FC<ISpeakerOffIconProps> = memo(props => {
  return <SpeakerOffSvg {...props} />;
});
