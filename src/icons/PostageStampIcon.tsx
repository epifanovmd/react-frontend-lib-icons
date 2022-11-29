import React, { FC, memo } from 'react';
import PostageStampSvg from '../svg/postage-stamp.svg';

export interface IPostageStampIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PostageStampIcon: FC<IPostageStampIconProps> = memo(props => {
  return <PostageStampSvg {...props} />;
});
