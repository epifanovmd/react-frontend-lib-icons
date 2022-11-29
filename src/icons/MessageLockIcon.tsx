import React, { FC, memo } from 'react';
import MessageLockSvg from '../svg/message-lock.svg';

export interface IMessageLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageLockIcon: FC<IMessageLockIconProps> = memo(props => {
  return <MessageLockSvg {...props} />;
});
