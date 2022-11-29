import React, { FC, memo } from 'react';
import SmokeDetectorAlertOutlineSvg from '../svg/smoke-detector-alert-outline.svg';

export interface ISmokeDetectorAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SmokeDetectorAlertOutlineIcon: FC<ISmokeDetectorAlertOutlineIconProps> = memo(props => {
  return <SmokeDetectorAlertOutlineSvg {...props} />;
});
