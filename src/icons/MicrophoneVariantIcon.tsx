import React, { FC, memo } from 'react';
import MicrophoneVariantSvg from '../svg/microphone-variant.svg';

export interface IMicrophoneVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrophoneVariantIcon: FC<IMicrophoneVariantIconProps> = memo(props => {
  return <MicrophoneVariantSvg {...props} />;
});
