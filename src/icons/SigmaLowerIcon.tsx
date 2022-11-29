import React, { FC, memo } from 'react';
import SigmaLowerSvg from '../svg/sigma-lower.svg';

export interface ISigmaLowerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SigmaLowerIcon: FC<ISigmaLowerIconProps> = memo(props => {
  return <SigmaLowerSvg {...props} />;
});
