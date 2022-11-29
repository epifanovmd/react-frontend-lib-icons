import React, { FC, memo } from 'react';
import BatteryMinusOutlineSvg from '../svg/battery-minus-outline.svg';

export interface IBatteryMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatteryMinusOutlineIcon: FC<IBatteryMinusOutlineIconProps> = memo(props => {
  return <BatteryMinusOutlineSvg {...props} />;
});
