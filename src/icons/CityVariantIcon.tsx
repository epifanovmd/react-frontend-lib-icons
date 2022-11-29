import React, { FC, memo } from 'react';
import CityVariantSvg from '../svg/city-variant.svg';

export interface ICityVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CityVariantIcon: FC<ICityVariantIconProps> = memo(props => {
  return <CityVariantSvg {...props} />;
});
