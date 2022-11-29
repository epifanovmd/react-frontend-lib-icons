import React, { FC, memo } from 'react';
import CloudCircleOutlineSvg from '../svg/cloud-circle-outline.svg';

export interface ICloudCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudCircleOutlineIcon: FC<ICloudCircleOutlineIconProps> = memo(props => {
  return <CloudCircleOutlineSvg {...props} />;
});
