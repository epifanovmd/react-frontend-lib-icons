import React, { FC, memo } from 'react';
import CloudMinusSvg from '../svg/cloud-minus.svg';

export interface ICloudMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudMinusIcon: FC<ICloudMinusIconProps> = memo(props => {
  return <CloudMinusSvg {...props} />;
});
