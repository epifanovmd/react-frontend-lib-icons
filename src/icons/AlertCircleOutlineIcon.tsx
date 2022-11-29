import React, { FC, memo } from 'react';
import AlertCircleOutlineSvg from '../svg/alert-circle-outline.svg';

export interface IAlertCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlertCircleOutlineIcon: FC<IAlertCircleOutlineIconProps> = memo(props => {
  return <AlertCircleOutlineSvg {...props} />;
});
