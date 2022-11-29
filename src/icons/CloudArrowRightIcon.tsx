import React, { FC, memo } from 'react';
import CloudArrowRightSvg from '../svg/cloud-arrow-right.svg';

export interface ICloudArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudArrowRightIcon: FC<ICloudArrowRightIconProps> = memo(props => {
  return <CloudArrowRightSvg {...props} />;
});
