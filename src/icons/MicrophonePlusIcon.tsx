import React, { FC, memo } from 'react';
import MicrophonePlusSvg from '../svg/microphone-plus.svg';

export interface IMicrophonePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrophonePlusIcon: FC<IMicrophonePlusIconProps> = memo(props => {
  return <MicrophonePlusSvg {...props} />;
});
