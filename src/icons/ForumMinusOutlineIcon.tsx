import React, { FC, memo } from 'react';
import ForumMinusOutlineSvg from '../svg/forum-minus-outline.svg';

export interface IForumMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ForumMinusOutlineIcon: FC<IForumMinusOutlineIconProps> = memo(props => {
  return <ForumMinusOutlineSvg {...props} />;
});
