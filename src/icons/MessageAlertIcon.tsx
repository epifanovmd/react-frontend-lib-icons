import React, { FC, memo } from 'react';
import MessageAlertSvg from '../svg/message-alert.svg';

export interface IMessageAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageAlertIcon: FC<IMessageAlertIconProps> = memo(props => {
  return <MessageAlertSvg {...props} />;
});
