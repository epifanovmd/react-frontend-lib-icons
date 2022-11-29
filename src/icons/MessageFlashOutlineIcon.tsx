import React, { FC, memo } from 'react';
import MessageFlashOutlineSvg from '../svg/message-flash-outline.svg';

export interface IMessageFlashOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageFlashOutlineIcon: FC<IMessageFlashOutlineIconProps> = memo(props => {
  return <MessageFlashOutlineSvg {...props} />;
});
