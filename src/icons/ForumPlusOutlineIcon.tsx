import React, { FC, memo } from 'react';
import ForumPlusOutlineSvg from '../svg/forum-plus-outline.svg';

export interface IForumPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ForumPlusOutlineIcon: FC<IForumPlusOutlineIconProps> = memo(props => {
  return <ForumPlusOutlineSvg {...props} />;
});
