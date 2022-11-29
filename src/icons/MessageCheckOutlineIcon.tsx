import React, { FC, memo } from 'react';
import MessageCheckOutlineSvg from '../svg/message-check-outline.svg';

export interface IMessageCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageCheckOutlineIcon: FC<IMessageCheckOutlineIconProps> = memo(props => {
  return <MessageCheckOutlineSvg {...props} />;
});
