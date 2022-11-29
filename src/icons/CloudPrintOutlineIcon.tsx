import React, { FC, memo } from 'react';
import CloudPrintOutlineSvg from '../svg/cloud-print-outline.svg';

export interface ICloudPrintOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudPrintOutlineIcon: FC<ICloudPrintOutlineIconProps> = memo(props => {
  return <CloudPrintOutlineSvg {...props} />;
});
