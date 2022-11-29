import React, { FC, memo } from 'react';
import MessageTextSvg from '../svg/message-text.svg';

export interface IMessageTextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageTextIcon: FC<IMessageTextIconProps> = memo(props => {
  return <MessageTextSvg {...props} />;
});
