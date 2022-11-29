import React, { FC, memo } from 'react';
import ReplyCircleSvg from '../svg/reply-circle.svg';

export interface IReplyCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReplyCircleIcon: FC<IReplyCircleIconProps> = memo(props => {
  return <ReplyCircleSvg {...props} />;
});
