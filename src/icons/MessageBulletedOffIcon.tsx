import React, { FC, memo } from 'react';
import MessageBulletedOffSvg from '../svg/message-bulleted-off.svg';

export interface IMessageBulletedOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageBulletedOffIcon: FC<IMessageBulletedOffIconProps> = memo(props => {
  return <MessageBulletedOffSvg {...props} />;
});
