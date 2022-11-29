import React, { FC, memo } from 'react';
import MessageTextFastSvg from '../svg/message-text-fast.svg';

export interface IMessageTextFastIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageTextFastIcon: FC<IMessageTextFastIconProps> = memo(props => {
  return <MessageTextFastSvg {...props} />;
});
