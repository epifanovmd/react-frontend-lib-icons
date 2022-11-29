import React, { FC, memo } from 'react';
import CloudPercentOutlineSvg from '../svg/cloud-percent-outline.svg';

export interface ICloudPercentOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudPercentOutlineIcon: FC<ICloudPercentOutlineIconProps> = memo(props => {
  return <CloudPercentOutlineSvg {...props} />;
});
