import React, { FC, memo } from 'react';
import CloudSearchSvg from '../svg/cloud-search.svg';

export interface ICloudSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudSearchIcon: FC<ICloudSearchIconProps> = memo(props => {
  return <CloudSearchSvg {...props} />;
});
