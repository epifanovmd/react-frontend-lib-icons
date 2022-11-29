import React, { FC, memo } from 'react';
import CloudCheckVariantSvg from '../svg/cloud-check-variant.svg';

export interface ICloudCheckVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudCheckVariantIcon: FC<ICloudCheckVariantIconProps> = memo(props => {
  return <CloudCheckVariantSvg {...props} />;
});
