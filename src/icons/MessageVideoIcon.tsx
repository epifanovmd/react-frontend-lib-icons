import React, { FC, memo } from 'react';
import MessageVideoSvg from '../svg/message-video.svg';

export interface IMessageVideoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageVideoIcon: FC<IMessageVideoIconProps> = memo(props => {
  return <MessageVideoSvg {...props} />;
});
