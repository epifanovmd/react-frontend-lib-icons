import React, { FC, memo } from 'react';
import ChatRemoveOutlineSvg from '../svg/chat-remove-outline.svg';

export interface IChatRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChatRemoveOutlineIcon: FC<IChatRemoveOutlineIconProps> = memo(props => {
  return <ChatRemoveOutlineSvg {...props} />;
});
