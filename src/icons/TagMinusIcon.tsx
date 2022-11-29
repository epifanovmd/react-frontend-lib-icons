import React, { FC, memo } from 'react';
import TagMinusSvg from '../svg/tag-minus.svg';

export interface ITagMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TagMinusIcon: FC<ITagMinusIconProps> = memo(props => {
  return <TagMinusSvg {...props} />;
});
