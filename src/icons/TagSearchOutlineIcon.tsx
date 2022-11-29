import React, { FC, memo } from 'react';
import TagSearchOutlineSvg from '../svg/tag-search-outline.svg';

export interface ITagSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagSearchOutlineIcon: FC<ITagSearchOutlineIconProps> = memo(props => {
  return <TagSearchOutlineSvg {...props} />;
});
