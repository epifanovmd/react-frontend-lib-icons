import React, { FC, memo } from 'react';
import CloudCancelOutlineSvg from '../svg/cloud-cancel-outline.svg';

export interface ICloudCancelOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudCancelOutlineIcon: FC<ICloudCancelOutlineIconProps> = memo(props => {
  return <CloudCancelOutlineSvg {...props} />;
});
