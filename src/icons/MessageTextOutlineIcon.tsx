import React, { FC, memo } from 'react';
import MessageTextOutlineSvg from '../svg/message-text-outline.svg';

export interface IMessageTextOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageTextOutlineIcon: FC<IMessageTextOutlineIconProps> = memo(props => {
  return <MessageTextOutlineSvg {...props} />;
});
