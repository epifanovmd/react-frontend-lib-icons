import React, { FC, memo } from 'react';
import MeterGasSvg from '../svg/meter-gas.svg';

export interface IMeterGasIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MeterGasIcon: FC<IMeterGasIconProps> = memo(props => {
  return <MeterGasSvg {...props} />;
});
