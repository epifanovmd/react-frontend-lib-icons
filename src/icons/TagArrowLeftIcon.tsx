import React, { FC, memo } from 'react';
import TagArrowLeftSvg from '../svg/tag-arrow-left.svg';

export interface ITagArrowLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagArrowLeftIcon: FC<ITagArrowLeftIconProps> = memo(props => {
  return <TagArrowLeftSvg {...props} />;
});
