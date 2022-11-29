import React, { FC, memo } from 'react';
import MessageLockOutlineSvg from '../svg/message-lock-outline.svg';

export interface IMessageLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageLockOutlineIcon: FC<IMessageLockOutlineIconProps> = memo(props => {
  return <MessageLockOutlineSvg {...props} />;
});
