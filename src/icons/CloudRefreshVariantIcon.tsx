import React, { FC, memo } from 'react';
import CloudRefreshVariantSvg from '../svg/cloud-refresh-variant.svg';

export interface ICloudRefreshVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudRefreshVariantIcon: FC<ICloudRefreshVariantIconProps> = memo(props => {
  return <CloudRefreshVariantSvg {...props} />;
});
