import React, { FC, memo } from 'react';
import MessageDrawSvg from '../svg/message-draw.svg';

export interface IMessageDrawIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageDrawIcon: FC<IMessageDrawIconProps> = memo(props => {
  return <MessageDrawSvg {...props} />;
});
