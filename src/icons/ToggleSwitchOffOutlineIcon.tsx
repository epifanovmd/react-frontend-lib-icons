import React, { FC, memo } from 'react';
import ToggleSwitchOffOutlineSvg from '../svg/toggle-switch-off-outline.svg';

export interface IToggleSwitchOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToggleSwitchOffOutlineIcon: FC<IToggleSwitchOffOutlineIconProps> = memo(props => {
  return <ToggleSwitchOffOutlineSvg {...props} />;
});
