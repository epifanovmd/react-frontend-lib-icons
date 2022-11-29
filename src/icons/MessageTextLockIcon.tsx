import React, { FC, memo } from 'react';
import MessageTextLockSvg from '../svg/message-text-lock.svg';

export interface IMessageTextLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageTextLockIcon: FC<IMessageTextLockIconProps> = memo(props => {
  return <MessageTextLockSvg {...props} />;
});
