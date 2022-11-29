import React, { FC, memo } from 'react';
import TagSvg from '../svg/tag.svg';

export interface ITagIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagIcon: FC<ITagIconProps> = memo(props => {
  return <TagSvg {...props} />;
});
