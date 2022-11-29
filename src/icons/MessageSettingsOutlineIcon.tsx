import React, { FC, memo } from 'react';
import MessageSettingsOutlineSvg from '../svg/message-settings-outline.svg';

export interface IMessageSettingsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageSettingsOutlineIcon: FC<IMessageSettingsOutlineIconProps> = memo(props => {
  return <MessageSettingsOutlineSvg {...props} />;
});
