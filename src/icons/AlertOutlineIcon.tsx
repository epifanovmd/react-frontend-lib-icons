import React, { FC, memo } from 'react';
import AlertOutlineSvg from '../svg/alert-outline.svg';

export interface IAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlertOutlineIcon: FC<IAlertOutlineIconProps> = memo(props => {
  return <AlertOutlineSvg {...props} />;
});
