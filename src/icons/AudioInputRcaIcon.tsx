import React, { FC, memo } from 'react';
import AudioInputRcaSvg from '../svg/audio-input-rca.svg';

export interface IAudioInputRcaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AudioInputRcaIcon: FC<IAudioInputRcaIconProps> = memo(props => {
  return <AudioInputRcaSvg {...props} />;
});
