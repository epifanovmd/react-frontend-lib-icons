import React, { FC, memo } from 'react';
import MoonWaxingGibbousSvg from '../svg/moon-waxing-gibbous.svg';

export interface IMoonWaxingGibbousIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MoonWaxingGibbousIcon: FC<IMoonWaxingGibbousIconProps> = memo(props => {
  return <MoonWaxingGibbousSvg {...props} />;
});
