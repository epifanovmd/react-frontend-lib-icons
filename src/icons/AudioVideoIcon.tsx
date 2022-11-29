import React, { FC, memo } from 'react';
import AudioVideoSvg from '../svg/audio-video.svg';

export interface IAudioVideoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AudioVideoIcon: FC<IAudioVideoIconProps> = memo(props => {
  return <AudioVideoSvg {...props} />;
});
