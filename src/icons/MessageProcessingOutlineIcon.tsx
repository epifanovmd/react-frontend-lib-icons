import React, { FC, memo } from 'react';
import MessageProcessingOutlineSvg from '../svg/message-processing-outline.svg';

export interface IMessageProcessingOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageProcessingOutlineIcon: FC<IMessageProcessingOutlineIconProps> = memo(props => {
  return <MessageProcessingOutlineSvg {...props} />;
});
