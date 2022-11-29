import React, { FC, memo } from 'react';
import MessageMinusOutlineSvg from '../svg/message-minus-outline.svg';

export interface IMessageMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageMinusOutlineIcon: FC<IMessageMinusOutlineIconProps> = memo(props => {
  return <MessageMinusOutlineSvg {...props} />;
});
