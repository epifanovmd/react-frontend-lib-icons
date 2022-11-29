import React, { FC, memo } from 'react';
import HomeAutomationSvg from '../svg/home-automation.svg';

export interface IHomeAutomationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HomeAutomationIcon: FC<IHomeAutomationIconProps> = memo(props => {
  return <HomeAutomationSvg {...props} />;
});
