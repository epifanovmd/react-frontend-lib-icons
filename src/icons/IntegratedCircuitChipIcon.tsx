import React, { FC, memo } from 'react';
import IntegratedCircuitChipSvg from '../svg/integrated-circuit-chip.svg';

export interface IIntegratedCircuitChipIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const IntegratedCircuitChipIcon: FC<IIntegratedCircuitChipIconProps> = memo(props => {
  return <IntegratedCircuitChipSvg {...props} />;
});
