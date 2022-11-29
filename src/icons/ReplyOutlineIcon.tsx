import React, { FC, memo } from 'react';
import ReplyOutlineSvg from '../svg/reply-outline.svg';

export interface IReplyOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReplyOutlineIcon: FC<IReplyOutlineIconProps> = memo(props => {
  return <ReplyOutlineSvg {...props} />;
});
