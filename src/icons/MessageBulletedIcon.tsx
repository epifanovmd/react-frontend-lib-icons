import React, { FC, memo } from 'react';
import MessageBulletedSvg from '../svg/message-bulleted.svg';

export interface IMessageBulletedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageBulletedIcon: FC<IMessageBulletedIconProps> = memo(props => {
  return <MessageBulletedSvg {...props} />;
});
