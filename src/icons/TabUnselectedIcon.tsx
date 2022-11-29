import React, { FC, memo } from 'react';
import TabUnselectedSvg from '../svg/tab-unselected.svg';

export interface ITabUnselectedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TabUnselectedIcon: FC<ITabUnselectedIconProps> = memo(props => {
  return <TabUnselectedSvg {...props} />;
});
