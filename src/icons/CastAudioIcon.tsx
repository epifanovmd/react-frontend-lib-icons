import React, { FC, memo } from 'react';
import CastAudioSvg from '../svg/cast-audio.svg';

export interface ICastAudioIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CastAudioIcon: FC<ICastAudioIconProps> = memo(props => {
  return <CastAudioSvg {...props} />;
});
