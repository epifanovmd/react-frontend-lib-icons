import React, { FC, memo } from 'react';
import CloudRefreshVariantOutlineSvg from '../svg/cloud-refresh-variant-outline.svg';

export interface ICloudRefreshVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudRefreshVariantOutlineIcon: FC<ICloudRefreshVariantOutlineIconProps> = memo(props => {
  return <CloudRefreshVariantOutlineSvg {...props} />;
});
