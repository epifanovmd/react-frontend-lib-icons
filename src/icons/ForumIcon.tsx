import React, { FC, memo } from 'react';
import ForumSvg from '../svg/forum.svg';

export interface IForumIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ForumIcon: FC<IForumIconProps> = memo(props => {
  return <ForumSvg {...props} />;
});
