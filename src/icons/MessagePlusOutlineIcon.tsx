import React, { FC, memo } from 'react';
import MessagePlusOutlineSvg from '../svg/message-plus-outline.svg';

export interface IMessagePlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessagePlusOutlineIcon: FC<IMessagePlusOutlineIconProps> = memo(props => {
  return <MessagePlusOutlineSvg {...props} />;
});
