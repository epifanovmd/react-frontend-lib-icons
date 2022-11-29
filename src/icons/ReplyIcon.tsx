import React, { FC, memo } from 'react';
import ReplySvg from '../svg/reply.svg';

export interface IReplyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReplyIcon: FC<IReplyIconProps> = memo(props => {
  return <ReplySvg {...props} />;
});
