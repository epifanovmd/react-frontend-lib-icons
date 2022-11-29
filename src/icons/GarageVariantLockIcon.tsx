import React, { FC, memo } from 'react';
import GarageVariantLockSvg from '../svg/garage-variant-lock.svg';

export interface IGarageVariantLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GarageVariantLockIcon: FC<IGarageVariantLockIconProps> = memo(props => {
  return <GarageVariantLockSvg {...props} />;
});
