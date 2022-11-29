import React, { FC, memo } from 'react';
import MessageFastSvg from '../svg/message-fast.svg';

export interface IMessageFastIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageFastIcon: FC<IMessageFastIconProps> = memo(props => {
  return <MessageFastSvg {...props} />;
});
