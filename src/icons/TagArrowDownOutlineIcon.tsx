import React, { FC, memo } from 'react';
import TagArrowDownOutlineSvg from '../svg/tag-arrow-down-outline.svg';

export interface ITagArrowDownOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagArrowDownOutlineIcon: FC<ITagArrowDownOutlineIconProps> = memo(props => {
  return <TagArrowDownOutlineSvg {...props} />;
});
