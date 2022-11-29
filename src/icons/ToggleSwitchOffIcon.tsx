import React, { FC, memo } from 'react';
import ToggleSwitchOffSvg from '../svg/toggle-switch-off.svg';

export interface IToggleSwitchOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToggleSwitchOffIcon: FC<IToggleSwitchOffIconProps> = memo(props => {
  return <ToggleSwitchOffSvg {...props} />;
});
