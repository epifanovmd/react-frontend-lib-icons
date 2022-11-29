import React, { FC, memo } from 'react';
import ChatProcessingOutlineSvg from '../svg/chat-processing-outline.svg';

export interface IChatProcessingOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChatProcessingOutlineIcon: FC<IChatProcessingOutlineIconProps> = memo(props => {
  return <ChatProcessingOutlineSvg {...props} />;
});
