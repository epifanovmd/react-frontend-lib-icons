import React, { FC, memo } from 'react';
import GarageAlertVariantSvg from '../svg/garage-alert-variant.svg';

export interface IGarageAlertVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GarageAlertVariantIcon: FC<IGarageAlertVariantIconProps> = memo(props => {
  return <GarageAlertVariantSvg {...props} />;
});
