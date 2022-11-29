import React, { FC, memo } from 'react';
import ForumRemoveSvg from '../svg/forum-remove.svg';

export interface IForumRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ForumRemoveIcon: FC<IForumRemoveIconProps> = memo(props => {
  return <ForumRemoveSvg {...props} />;
});
