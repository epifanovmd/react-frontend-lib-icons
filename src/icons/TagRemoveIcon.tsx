import React, { FC, memo } from 'react';
import TagRemoveSvg from '../svg/tag-remove.svg';

export interface ITagRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagRemoveIcon: FC<ITagRemoveIconProps> = memo(props => {
  return <TagRemoveSvg {...props} />;
});
