import React, { FC, memo } from 'react';
import AudioVideoOffSvg from '../svg/audio-video-off.svg';

export interface IAudioVideoOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AudioVideoOffIcon: FC<IAudioVideoOffIconProps> = memo(props => {
  return <AudioVideoOffSvg {...props} />;
});
