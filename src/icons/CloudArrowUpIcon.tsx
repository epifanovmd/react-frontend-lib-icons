import React, { FC, memo } from 'react';
import CloudArrowUpSvg from '../svg/cloud-arrow-up.svg';

export interface ICloudArrowUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudArrowUpIcon: FC<ICloudArrowUpIconProps> = memo(props => {
  return <CloudArrowUpSvg {...props} />;
});
