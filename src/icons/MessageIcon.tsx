import React, { FC, memo } from 'react';
import MessageSvg from '../svg/message.svg';

export interface IMessageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageIcon: FC<IMessageIconProps> = memo(props => {
  return <MessageSvg {...props} />;
});
