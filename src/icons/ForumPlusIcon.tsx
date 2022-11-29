import React, { FC, memo } from 'react';
import ForumPlusSvg from '../svg/forum-plus.svg';

export interface IForumPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ForumPlusIcon: FC<IForumPlusIconProps> = memo(props => {
  return <ForumPlusSvg {...props} />;
});
