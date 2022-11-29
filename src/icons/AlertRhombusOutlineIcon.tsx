import React, { FC, memo } from 'react';
import AlertRhombusOutlineSvg from '../svg/alert-rhombus-outline.svg';

export interface IAlertRhombusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlertRhombusOutlineIcon: FC<IAlertRhombusOutlineIconProps> = memo(props => {
  return <AlertRhombusOutlineSvg {...props} />;
});
