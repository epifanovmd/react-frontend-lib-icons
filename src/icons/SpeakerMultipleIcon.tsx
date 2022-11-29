import React, { FC, memo } from 'react';
import SpeakerMultipleSvg from '../svg/speaker-multiple.svg';

export interface ISpeakerMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpeakerMultipleIcon: FC<ISpeakerMultipleIconProps> = memo(props => {
  return <SpeakerMultipleSvg {...props} />;
});
