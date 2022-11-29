import React, { FC, memo } from 'react';
import MeterGasOutlineSvg from '../svg/meter-gas-outline.svg';

export interface IMeterGasOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MeterGasOutlineIcon: FC<IMeterGasOutlineIconProps> = memo(props => {
  return <MeterGasOutlineSvg {...props} />;
});
