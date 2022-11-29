import React, { FC, memo } from 'react';
import MessagePlusSvg from '../svg/message-plus.svg';

export interface IMessagePlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessagePlusIcon: FC<IMessagePlusIconProps> = memo(props => {
  return <MessagePlusSvg {...props} />;
});
