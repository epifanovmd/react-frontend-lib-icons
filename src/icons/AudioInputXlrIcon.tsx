import React, { FC, memo } from 'react';
import AudioInputXlrSvg from '../svg/audio-input-xlr.svg';

export interface IAudioInputXlrIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AudioInputXlrIcon: FC<IAudioInputXlrIconProps> = memo(props => {
  return <AudioInputXlrSvg {...props} />;
});
