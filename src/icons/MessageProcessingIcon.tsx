import React, { FC, memo } from 'react';
import MessageProcessingSvg from '../svg/message-processing.svg';

export interface IMessageProcessingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageProcessingIcon: FC<IMessageProcessingIconProps> = memo(props => {
  return <MessageProcessingSvg {...props} />;
});
