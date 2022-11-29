import React, { FC, memo } from 'react';
import MessageOffSvg from '../svg/message-off.svg';

export interface IMessageOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageOffIcon: FC<IMessageOffIconProps> = memo(props => {
  return <MessageOffSvg {...props} />;
});
