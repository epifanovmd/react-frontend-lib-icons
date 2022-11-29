import React, { FC, memo } from 'react';
import TagArrowRightSvg from '../svg/tag-arrow-right.svg';

export interface ITagArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagArrowRightIcon: FC<ITagArrowRightIconProps> = memo(props => {
  return <TagArrowRightSvg {...props} />;
});
