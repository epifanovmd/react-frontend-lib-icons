import React, { FC, memo } from 'react';
import GarageOpenVariantSvg from '../svg/garage-open-variant.svg';

export interface IGarageOpenVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GarageOpenVariantIcon: FC<IGarageOpenVariantIconProps> = memo(props => {
  return <GarageOpenVariantSvg {...props} />;
});
