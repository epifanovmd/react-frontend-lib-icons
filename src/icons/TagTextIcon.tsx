import React, { FC, memo } from 'react';
import TagTextSvg from '../svg/tag-text.svg';

export interface ITagTextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagTextIcon: FC<ITagTextIconProps> = memo(props => {
  return <TagTextSvg {...props} />;
});
