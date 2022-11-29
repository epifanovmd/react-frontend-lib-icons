import React, { FC, memo } from 'react';
import ChatRemoveSvg from '../svg/chat-remove.svg';

export interface IChatRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChatRemoveIcon: FC<IChatRemoveIconProps> = memo(props => {
  return <ChatRemoveSvg {...props} />;
});
