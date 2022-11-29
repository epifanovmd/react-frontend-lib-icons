import React, { FC, memo } from 'react';
import CloudOffOutlineSvg from '../svg/cloud-off-outline.svg';

export interface ICloudOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudOffOutlineIcon: FC<ICloudOffOutlineIconProps> = memo(props => {
  return <CloudOffOutlineSvg {...props} />;
});
