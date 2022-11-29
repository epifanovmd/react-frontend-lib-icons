import React, { FC, memo } from 'react';
import MessageStarOutlineSvg from '../svg/message-star-outline.svg';

export interface IMessageStarOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageStarOutlineIcon: FC<IMessageStarOutlineIconProps> = memo(props => {
  return <MessageStarOutlineSvg {...props} />;
});
