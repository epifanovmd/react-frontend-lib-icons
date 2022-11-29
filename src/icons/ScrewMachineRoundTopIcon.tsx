import React, { FC, memo } from 'react';
import ScrewMachineRoundTopSvg from '../svg/screw-machine-round-top.svg';

export interface IScrewMachineRoundTopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScrewMachineRoundTopIcon: FC<IScrewMachineRoundTopIconProps> = memo(props => {
  return <ScrewMachineRoundTopSvg {...props} />;
});
