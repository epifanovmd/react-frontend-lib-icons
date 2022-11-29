import React, { FC, memo } from 'react';
import GarageVariantSvg from '../svg/garage-variant.svg';

export interface IGarageVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GarageVariantIcon: FC<IGarageVariantIconProps> = memo(props => {
  return <GarageVariantSvg {...props} />;
});
