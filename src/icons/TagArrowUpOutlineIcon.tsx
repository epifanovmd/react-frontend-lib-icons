import React, { FC, memo } from 'react';
import TagArrowUpOutlineSvg from '../svg/tag-arrow-up-outline.svg';

export interface ITagArrowUpOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagArrowUpOutlineIcon: FC<ITagArrowUpOutlineIconProps> = memo(props => {
  return <TagArrowUpOutlineSvg {...props} />;
});
