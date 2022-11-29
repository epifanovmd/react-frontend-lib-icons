import React, { FC, memo } from 'react';
import HomeAlertOutlineSvg from '../svg/home-alert-outline.svg';

export interface IHomeAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeAlertOutlineIcon: FC<IHomeAlertOutlineIconProps> = memo(props => {
  return <HomeAlertOutlineSvg {...props} />;
});
