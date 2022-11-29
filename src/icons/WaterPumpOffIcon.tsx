import React, { FC, memo } from 'react';
import WaterPumpOffSvg from '../svg/water-pump-off.svg';

export interface IWaterPumpOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WaterPumpOffIcon: FC<IWaterPumpOffIconProps> = memo(props => {
  return <WaterPumpOffSvg {...props} />;
});
