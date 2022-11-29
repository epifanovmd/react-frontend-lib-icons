import React, { FC, memo } from 'react';
import ForumRemoveOutlineSvg from '../svg/forum-remove-outline.svg';

export interface IForumRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ForumRemoveOutlineIcon: FC<IForumRemoveOutlineIconProps> = memo(props => {
  return <ForumRemoveOutlineSvg {...props} />;
});
