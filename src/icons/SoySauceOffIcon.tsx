import React, { FC, memo } from 'react';
import SoySauceOffSvg from '../svg/soy-sauce-off.svg';

export interface ISoySauceOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SoySauceOffIcon: FC<ISoySauceOffIconProps> = memo(props => {
  return <SoySauceOffSvg {...props} />;
});
