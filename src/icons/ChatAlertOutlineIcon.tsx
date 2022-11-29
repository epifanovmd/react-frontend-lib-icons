import React, { FC, memo } from 'react';
import ChatAlertOutlineSvg from '../svg/chat-alert-outline.svg';

export interface IChatAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChatAlertOutlineIcon: FC<IChatAlertOutlineIconProps> = memo(props => {
  return <ChatAlertOutlineSvg {...props} />;
});
