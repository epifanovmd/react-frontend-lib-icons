import React, { FC, memo } from 'react';
import CloudClockOutlineSvg from '../svg/cloud-clock-outline.svg';

export interface ICloudClockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudClockOutlineIcon: FC<ICloudClockOutlineIconProps> = memo(props => {
  return <CloudClockOutlineSvg {...props} />;
});
