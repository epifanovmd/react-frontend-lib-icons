import React, { FC, memo } from 'react';
import ScrewMachineFlatTopSvg from '../svg/screw-machine-flat-top.svg';

export interface IScrewMachineFlatTopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScrewMachineFlatTopIcon: FC<IScrewMachineFlatTopIconProps> = memo(props => {
  return <ScrewMachineFlatTopSvg {...props} />;
});
