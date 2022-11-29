import React, { FC, memo } from 'react';
import MessageBookmarkOutlineSvg from '../svg/message-bookmark-outline.svg';

export interface IMessageBookmarkOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageBookmarkOutlineIcon: FC<IMessageBookmarkOutlineIconProps> = memo(props => {
  return <MessageBookmarkOutlineSvg {...props} />;
});
