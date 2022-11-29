import React, { FC, memo } from 'react';
import TagArrowRightOutlineSvg from '../svg/tag-arrow-right-outline.svg';

export interface ITagArrowRightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagArrowRightOutlineIcon: FC<ITagArrowRightOutlineIconProps> = memo(props => {
  return <TagArrowRightOutlineSvg {...props} />;
});
