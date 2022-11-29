import React, { FC, memo } from 'react';
import MoonWaningGibbousSvg from '../svg/moon-waning-gibbous.svg';

export interface IMoonWaningGibbousIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MoonWaningGibbousIcon: FC<IMoonWaningGibbousIconProps> = memo(props => {
  return <MoonWaningGibbousSvg {...props} />;
});
