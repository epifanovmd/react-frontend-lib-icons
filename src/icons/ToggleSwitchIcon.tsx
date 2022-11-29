import React, { FC, memo } from 'react';
import ToggleSwitchSvg from '../svg/toggle-switch.svg';

export interface IToggleSwitchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToggleSwitchIcon: FC<IToggleSwitchIconProps> = memo(props => {
  return <ToggleSwitchSvg {...props} />;
});
