import React, { FC, memo } from 'react';
import RedditSvg from '../svg/reddit.svg';

export interface IRedditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RedditIcon: FC<IRedditIconProps> = memo(props => {
  return <RedditSvg {...props} />;
});
