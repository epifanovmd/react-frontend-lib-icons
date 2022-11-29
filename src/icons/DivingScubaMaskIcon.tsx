import React, { FC, memo } from 'react';
import DivingScubaMaskSvg from '../svg/diving-scuba-mask.svg';

export interface IDivingScubaMaskIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DivingScubaMaskIcon: FC<IDivingScubaMaskIconProps> = memo(props => {
  return <DivingScubaMaskSvg {...props} />;
});
