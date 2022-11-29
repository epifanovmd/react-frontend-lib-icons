import React, { FC, memo } from 'react';
import TabSvg from '../svg/tab.svg';

export interface ITabIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TabIcon: FC<ITabIconProps> = memo(props => {
  return <TabSvg {...props} />;
});
