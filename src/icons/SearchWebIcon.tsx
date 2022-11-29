import React, { FC, memo } from 'react';
import SearchWebSvg from '../svg/search-web.svg';

export interface ISearchWebIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SearchWebIcon: FC<ISearchWebIconProps> = memo(props => {
  return <SearchWebSvg {...props} />;
});
