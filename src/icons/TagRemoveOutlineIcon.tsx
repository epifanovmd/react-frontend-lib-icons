import React, { FC, memo } from 'react';
import TagRemoveOutlineSvg from '../svg/tag-remove-outline.svg';

export interface ITagRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagRemoveOutlineIcon: FC<ITagRemoveOutlineIconProps> = memo(props => {
  return <TagRemoveOutlineSvg {...props} />;
});
