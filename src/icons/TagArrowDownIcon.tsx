import React, { FC, memo } from 'react';
import TagArrowDownSvg from '../svg/tag-arrow-down.svg';

export interface ITagArrowDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagArrowDownIcon: FC<ITagArrowDownIconProps> = memo(props => {
  return <TagArrowDownSvg {...props} />;
});
