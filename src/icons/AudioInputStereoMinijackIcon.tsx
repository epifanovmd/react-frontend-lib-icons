import React, { FC, memo } from 'react';
import AudioInputStereoMinijackSvg from '../svg/audio-input-stereo-minijack.svg';

export interface IAudioInputStereoMinijackIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AudioInputStereoMinijackIcon: FC<IAudioInputStereoMinijackIconProps> = memo(props => {
  return <AudioInputStereoMinijackSvg {...props} />;
});
