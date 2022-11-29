import React, { FC, memo } from 'react';
import ChiliAlertSvg from '../svg/chili-alert.svg';

export interface IChiliAlertIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChiliAlertIcon: FC<IChiliAlertIconProps> = memo(props => {
  return <ChiliAlertSvg {...props} />;
});
