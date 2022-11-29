import React, { FC, memo } from 'react';
import AlertBoxSvg from '../svg/alert-box.svg';

export interface IAlertBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlertBoxIcon: FC<IAlertBoxIconProps> = memo(props => {
  return <AlertBoxSvg {...props} />;
});
