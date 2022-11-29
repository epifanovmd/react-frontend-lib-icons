import React, { FC, memo } from 'react';
import ToggleSwitchOutlineSvg from '../svg/toggle-switch-outline.svg';

export interface IToggleSwitchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToggleSwitchOutlineIcon: FC<IToggleSwitchOutlineIconProps> = memo(props => {
  return <ToggleSwitchOutlineSvg {...props} />;
});
