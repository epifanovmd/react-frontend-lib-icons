import React, { FC, memo } from 'react';
import MessageArrowLeftSvg from '../svg/message-arrow-left.svg';

export interface IMessageArrowLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageArrowLeftIcon: FC<IMessageArrowLeftIconProps> = memo(props => {
  return <MessageArrowLeftSvg {...props} />;
});
