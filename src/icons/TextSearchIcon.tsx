import React, { FC, memo } from 'react';
import TextSearchSvg from '../svg/text-search.svg';

export interface ITextSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextSearchIcon: FC<ITextSearchIconProps> = memo(props => {
  return <TextSearchSvg {...props} />;
});
