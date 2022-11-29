import React, { FC, memo } from 'react';
import MessageCheckSvg from '../svg/message-check.svg';

export interface IMessageCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageCheckIcon: FC<IMessageCheckIconProps> = memo(props => {
  return <MessageCheckSvg {...props} />;
});
