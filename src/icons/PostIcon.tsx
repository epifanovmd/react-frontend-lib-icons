import React, { FC, memo } from 'react';
import PostSvg from '../svg/post.svg';

export interface IPostIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PostIcon: FC<IPostIconProps> = memo(props => {
  return <PostSvg {...props} />;
});
