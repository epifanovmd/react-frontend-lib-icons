import React, { FC, memo } from 'react';
import AlertPlusOutlineSvg from '../svg/alert-plus-outline.svg';

export interface IAlertPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlertPlusOutlineIcon: FC<IAlertPlusOutlineIconProps> = memo(props => {
  return <AlertPlusOutlineSvg {...props} />;
});
