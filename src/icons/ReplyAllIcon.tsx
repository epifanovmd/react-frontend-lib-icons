import React, { FC, memo } from 'react';
import ReplyAllSvg from '../svg/reply-all.svg';

export interface IReplyAllIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReplyAllIcon: FC<IReplyAllIconProps> = memo(props => {
  return <ReplyAllSvg {...props} />;
});
