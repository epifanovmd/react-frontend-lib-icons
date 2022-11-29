import React, { FC, memo } from 'react';
import TagMinusOutlineSvg from '../svg/tag-minus-outline.svg';

export interface ITagMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagMinusOutlineIcon: FC<ITagMinusOutlineIconProps> = memo(props => {
  return <TagMinusOutlineSvg {...props} />;
});
