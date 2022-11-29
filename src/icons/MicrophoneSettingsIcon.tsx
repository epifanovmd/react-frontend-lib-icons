import React, { FC, memo } from 'react';
import MicrophoneSettingsSvg from '../svg/microphone-settings.svg';

export interface IMicrophoneSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrophoneSettingsIcon: FC<IMicrophoneSettingsIconProps> = memo(props => {
  return <MicrophoneSettingsSvg {...props} />;
});
