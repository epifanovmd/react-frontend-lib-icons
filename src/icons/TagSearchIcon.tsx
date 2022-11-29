import React, { FC, memo } from 'react';
import TagSearchSvg from '../svg/tag-search.svg';

export interface ITagSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagSearchIcon: FC<ITagSearchIconProps> = memo(props => {
  return <TagSearchSvg {...props} />;
});
