import React, { FC, memo } from 'react';
import TabSearchSvg from '../svg/tab-search.svg';

export interface ITabSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TabSearchIcon: FC<ITabSearchIconProps> = memo(props => {
  return <TabSearchSvg {...props} />;
});
