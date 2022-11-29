import React, { FC, memo } from 'react';
import PostLampSvg from '../svg/post-lamp.svg';

export interface IPostLampIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PostLampIcon: FC<IPostLampIconProps> = memo(props => {
  return <PostLampSvg {...props} />;
});
