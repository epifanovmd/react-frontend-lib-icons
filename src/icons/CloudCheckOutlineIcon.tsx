import React, { FC, memo } from 'react';
import CloudCheckOutlineSvg from '../svg/cloud-check-outline.svg';

export interface ICloudCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudCheckOutlineIcon: FC<ICloudCheckOutlineIconProps> = memo(props => {
  return <CloudCheckOutlineSvg {...props} />;
});
