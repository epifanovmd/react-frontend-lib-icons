import React, { FC, memo } from 'react';
import HomeBatterySvg from '../svg/home-battery.svg';

export interface IHomeBatteryIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeBatteryIcon: FC<IHomeBatteryIconProps> = memo(props => {
  return <HomeBatterySvg {...props} />;
});
