import React, { FC, memo } from 'react';
import TagArrowLeftOutlineSvg from '../svg/tag-arrow-left-outline.svg';

export interface ITagArrowLeftOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagArrowLeftOutlineIcon: FC<ITagArrowLeftOutlineIconProps> = memo(props => {
  return <TagArrowLeftOutlineSvg {...props} />;
});
