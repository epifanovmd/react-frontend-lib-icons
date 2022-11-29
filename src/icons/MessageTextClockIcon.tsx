import React, { FC, memo } from 'react';
import MessageTextClockSvg from '../svg/message-text-clock.svg';

export interface IMessageTextClockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageTextClockIcon: FC<IMessageTextClockIconProps> = memo(props => {
  return <MessageTextClockSvg {...props} />;
});
