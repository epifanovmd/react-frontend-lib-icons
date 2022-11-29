import React, { FC, memo } from 'react';
import CloudPlusOutlineSvg from '../svg/cloud-plus-outline.svg';

export interface ICloudPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudPlusOutlineIcon: FC<ICloudPlusOutlineIconProps> = memo(props => {
  return <CloudPlusOutlineSvg {...props} />;
});
