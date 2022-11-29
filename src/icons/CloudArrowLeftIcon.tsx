import React, { FC, memo } from 'react';
import CloudArrowLeftSvg from '../svg/cloud-arrow-left.svg';

export interface ICloudArrowLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudArrowLeftIcon: FC<ICloudArrowLeftIconProps> = memo(props => {
  return <CloudArrowLeftSvg {...props} />;
});
