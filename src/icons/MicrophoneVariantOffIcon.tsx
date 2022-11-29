import React, { FC, memo } from 'react';
import MicrophoneVariantOffSvg from '../svg/microphone-variant-off.svg';

export interface IMicrophoneVariantOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrophoneVariantOffIcon: FC<IMicrophoneVariantOffIconProps> = memo(props => {
  return <MicrophoneVariantOffSvg {...props} />;
});
