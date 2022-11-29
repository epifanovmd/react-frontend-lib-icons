import React, { FC, memo } from 'react';
import SkiCrossCountrySvg from '../svg/ski-cross-country.svg';

export interface ISkiCrossCountryIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkiCrossCountryIcon: FC<ISkiCrossCountryIconProps> = memo(props => {
  return <SkiCrossCountrySvg {...props} />;
});
