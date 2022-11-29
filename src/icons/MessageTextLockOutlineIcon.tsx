import React, { FC, memo } from 'react';
import MessageTextLockOutlineSvg from '../svg/message-text-lock-outline.svg';

export interface IMessageTextLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageTextLockOutlineIcon: FC<IMessageTextLockOutlineIconProps> = memo(props => {
  return <MessageTextLockOutlineSvg {...props} />;
});
