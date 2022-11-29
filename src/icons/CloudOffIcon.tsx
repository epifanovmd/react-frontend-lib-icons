import React, { FC, memo } from 'react';
import CloudOffSvg from '../svg/cloud-off.svg';

export interface ICloudOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudOffIcon: FC<ICloudOffIconProps> = memo(props => {
  return <CloudOffSvg {...props} />;
});
