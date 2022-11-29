import React, { FC, memo } from 'react';
import SigmaSvg from '../svg/sigma.svg';

export interface ISigmaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SigmaIcon: FC<ISigmaIconProps> = memo(props => {
  return <SigmaSvg {...props} />;
});
