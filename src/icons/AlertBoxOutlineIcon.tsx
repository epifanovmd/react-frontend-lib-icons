import React, { FC, memo } from 'react';
import AlertBoxOutlineSvg from '../svg/alert-box-outline.svg';

export interface IAlertBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlertBoxOutlineIcon: FC<IAlertBoxOutlineIconProps> = memo(props => {
  return <AlertBoxOutlineSvg {...props} />;
});
