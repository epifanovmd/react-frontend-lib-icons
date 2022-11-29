import React, { FC, memo } from 'react';
import ChatAlertSvg from '../svg/chat-alert.svg';

export interface IChatAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChatAlertIcon: FC<IChatAlertIconProps> = memo(props => {
  return <ChatAlertSvg {...props} />;
});
