import React, { FC, memo } from 'react';
import TabletSvg from '../svg/tablet.svg';

export interface ITabletIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TabletIcon: FC<ITabletIconProps> = memo(props => {
  return <TabletSvg {...props} />;
});
