import React, { FC, memo } from 'react';
import SoySauceSvg from '../svg/soy-sauce.svg';

export interface ISoySauceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SoySauceIcon: FC<ISoySauceIconProps> = memo(props => {
  return <SoySauceSvg {...props} />;
});
