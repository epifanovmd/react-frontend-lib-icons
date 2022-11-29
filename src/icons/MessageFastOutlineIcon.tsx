import React, { FC, memo } from 'react';
import MessageFastOutlineSvg from '../svg/message-fast-outline.svg';

export interface IMessageFastOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageFastOutlineIcon: FC<IMessageFastOutlineIconProps> = memo(props => {
  return <MessageFastOutlineSvg {...props} />;
});
