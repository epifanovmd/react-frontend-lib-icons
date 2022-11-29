import React, { FC, memo } from 'react';
import ForumMinusSvg from '../svg/forum-minus.svg';

export interface IForumMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ForumMinusIcon: FC<IForumMinusIconProps> = memo(props => {
  return <ForumMinusSvg {...props} />;
});
