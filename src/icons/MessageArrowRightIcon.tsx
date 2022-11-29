import React, { FC, memo } from 'react';
import MessageArrowRightSvg from '../svg/message-arrow-right.svg';

export interface IMessageArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageArrowRightIcon: FC<IMessageArrowRightIconProps> = memo(props => {
  return <MessageArrowRightSvg {...props} />;
});
