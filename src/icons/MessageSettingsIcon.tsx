import React, { FC, memo } from 'react';
import MessageSettingsSvg from '../svg/message-settings.svg';

export interface IMessageSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageSettingsIcon: FC<IMessageSettingsIconProps> = memo(props => {
  return <MessageSettingsSvg {...props} />;
});
