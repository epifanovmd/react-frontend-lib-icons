import React, { FC, memo } from 'react';
import MessageTextClockOutlineSvg from '../svg/message-text-clock-outline.svg';

export interface IMessageTextClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageTextClockOutlineIcon: FC<IMessageTextClockOutlineIconProps> = memo(props => {
  return <MessageTextClockOutlineSvg {...props} />;
});
