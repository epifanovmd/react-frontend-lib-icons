import React, { FC, memo } from 'react';
import MessageFlashSvg from '../svg/message-flash.svg';

export interface IMessageFlashIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageFlashIcon: FC<IMessageFlashIconProps> = memo(props => {
  return <MessageFlashSvg {...props} />;
});
