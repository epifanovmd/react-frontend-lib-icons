import React, { FC, memo } from 'react';
import ReplyAllOutlineSvg from '../svg/reply-all-outline.svg';

export interface IReplyAllOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReplyAllOutlineIcon: FC<IReplyAllOutlineIconProps> = memo(props => {
  return <ReplyAllOutlineSvg {...props} />;
});
