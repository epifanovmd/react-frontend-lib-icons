import React, { FC, memo } from 'react';
import ForumOutlineSvg from '../svg/forum-outline.svg';

export interface IForumOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ForumOutlineIcon: FC<IForumOutlineIconProps> = memo(props => {
  return <ForumOutlineSvg {...props} />;
});
