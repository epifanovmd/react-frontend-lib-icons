import React, { FC, memo } from 'react';
import TagHeartSvg from '../svg/tag-heart.svg';

export interface ITagHeartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagHeartIcon: FC<ITagHeartIconProps> = memo(props => {
  return <TagHeartSvg {...props} />;
});
