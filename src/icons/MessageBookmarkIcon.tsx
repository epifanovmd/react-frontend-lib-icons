import React, { FC, memo } from 'react';
import MessageBookmarkSvg from '../svg/message-bookmark.svg';

export interface IMessageBookmarkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageBookmarkIcon: FC<IMessageBookmarkIconProps> = memo(props => {
  return <MessageBookmarkSvg {...props} />;
});
