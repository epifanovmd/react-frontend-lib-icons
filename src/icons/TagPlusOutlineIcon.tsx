import React, { FC, memo } from 'react';
import TagPlusOutlineSvg from '../svg/tag-plus-outline.svg';

export interface ITagPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagPlusOutlineIcon: FC<ITagPlusOutlineIconProps> = memo(props => {
  return <TagPlusOutlineSvg {...props} />;
});
