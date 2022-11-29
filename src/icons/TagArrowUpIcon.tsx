import React, { FC, memo } from 'react';
import TagArrowUpSvg from '../svg/tag-arrow-up.svg';

export interface ITagArrowUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagArrowUpIcon: FC<ITagArrowUpIconProps> = memo(props => {
  return <TagArrowUpSvg {...props} />;
});
