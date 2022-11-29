import React, { FC, memo } from 'react';
import PostOutlineSvg from '../svg/post-outline.svg';

export interface IPostOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PostOutlineIcon: FC<IPostOutlineIconProps> = memo(props => {
  return <PostOutlineSvg {...props} />;
});
