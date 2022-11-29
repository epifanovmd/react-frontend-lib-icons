import React, { FC, memo } from 'react';
import CloudAlertOutlineSvg from '../svg/cloud-alert-outline.svg';

export interface ICloudAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloudAlertOutlineIcon: FC<ICloudAlertOutlineIconProps> = memo(props => {
  return <CloudAlertOutlineSvg {...props} />;
});
