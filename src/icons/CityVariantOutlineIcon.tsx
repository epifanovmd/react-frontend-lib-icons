import React, { FC, memo } from 'react';
import CityVariantOutlineSvg from '../svg/city-variant-outline.svg';

export interface ICityVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CityVariantOutlineIcon: FC<ICityVariantOutlineIconProps> = memo(props => {
  return <CityVariantOutlineSvg {...props} />;
});
