import React, { FC, memo } from 'react';
import AlertMinusOutlineSvg from '../svg/alert-minus-outline.svg';

export interface IAlertMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlertMinusOutlineIcon: FC<IAlertMinusOutlineIconProps> = memo(props => {
  return <AlertMinusOutlineSvg {...props} />;
});
