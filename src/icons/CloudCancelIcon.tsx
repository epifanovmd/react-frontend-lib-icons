import React, { FC, memo } from 'react';
import CloudCancelSvg from '../svg/cloud-cancel.svg';

export interface ICloudCancelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudCancelIcon: FC<ICloudCancelIconProps> = memo(props => {
  return <CloudCancelSvg {...props} />;
});
