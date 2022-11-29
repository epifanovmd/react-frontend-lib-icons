import React, { FC, memo } from 'react';
import MessageOutlineSvg from '../svg/message-outline.svg';

export interface IMessageOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageOutlineIcon: FC<IMessageOutlineIconProps> = memo(props => {
  return <MessageOutlineSvg {...props} />;
});
