import React, { FC, memo } from 'react';
import CastAudioVariantSvg from '../svg/cast-audio-variant.svg';

export interface ICastAudioVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CastAudioVariantIcon: FC<ICastAudioVariantIconProps> = memo(props => {
  return <CastAudioVariantSvg {...props} />;
});
