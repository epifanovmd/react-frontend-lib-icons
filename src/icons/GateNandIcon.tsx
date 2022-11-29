import React, { FC, memo } from 'react';
import GateNandSvg from '../svg/gate-nand.svg';

export interface IGateNandIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GateNandIcon: FC<IGateNandIconProps> = memo(props => {
  return <GateNandSvg {...props} />;
});
