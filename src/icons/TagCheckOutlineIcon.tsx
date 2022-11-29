import React, { FC, memo } from 'react';
import TagCheckOutlineSvg from '../svg/tag-check-outline.svg';

export interface ITagCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagCheckOutlineIcon: FC<ITagCheckOutlineIconProps> = memo(props => {
  return <TagCheckOutlineSvg {...props} />;
});
