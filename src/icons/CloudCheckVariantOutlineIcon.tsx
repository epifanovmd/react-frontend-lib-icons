import React, { FC, memo } from 'react';
import CloudCheckVariantOutlineSvg from '../svg/cloud-check-variant-outline.svg';

export interface ICloudCheckVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudCheckVariantOutlineIcon: FC<ICloudCheckVariantOutlineIconProps> = memo(props => {
  return <CloudCheckVariantOutlineSvg {...props} />;
});
