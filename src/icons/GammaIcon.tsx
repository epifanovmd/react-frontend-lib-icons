import React, { FC, memo } from 'react';
import GammaSvg from '../svg/gamma.svg';

export interface IGammaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GammaIcon: FC<IGammaIconProps> = memo(props => {
  return <GammaSvg {...props} />;
});
