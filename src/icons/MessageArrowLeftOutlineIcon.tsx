import React, { FC, memo } from 'react';
import MessageArrowLeftOutlineSvg from '../svg/message-arrow-left-outline.svg';

export interface IMessageArrowLeftOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageArrowLeftOutlineIcon: FC<IMessageArrowLeftOutlineIconProps> = memo(props => {
  return <MessageArrowLeftOutlineSvg {...props} />;
});
