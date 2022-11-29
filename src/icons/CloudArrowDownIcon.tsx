import React, { FC, memo } from 'react';
import CloudArrowDownSvg from '../svg/cloud-arrow-down.svg';

export interface ICloudArrowDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudArrowDownIcon: FC<ICloudArrowDownIconProps> = memo(props => {
  return <CloudArrowDownSvg {...props} />;
});
