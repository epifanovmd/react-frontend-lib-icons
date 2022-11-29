import React, { FC, memo } from 'react';
import MessageCogOutlineSvg from '../svg/message-cog-outline.svg';

export interface IMessageCogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageCogOutlineIcon: FC<IMessageCogOutlineIconProps> = memo(props => {
  return <MessageCogOutlineSvg {...props} />;
});
