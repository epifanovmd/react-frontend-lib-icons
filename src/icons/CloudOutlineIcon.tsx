import React, { FC, memo } from 'react';
import CloudOutlineSvg from '../svg/cloud-outline.svg';

export interface ICloudOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudOutlineIcon: FC<ICloudOutlineIconProps> = memo(props => {
  return <CloudOutlineSvg {...props} />;
});
