import React, { FC, memo } from 'react';
import TagPlusSvg from '../svg/tag-plus.svg';

export interface ITagPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagPlusIcon: FC<ITagPlusIconProps> = memo(props => {
  return <TagPlusSvg {...props} />;
});
