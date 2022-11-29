import React, { FC, memo } from 'react';
import BellAlertOutlineSvg from '../svg/bell-alert-outline.svg';

export interface IBellAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BellAlertOutlineIcon: FC<IBellAlertOutlineIconProps> = memo(props => {
  return <BellAlertOutlineSvg {...props} />;
});
