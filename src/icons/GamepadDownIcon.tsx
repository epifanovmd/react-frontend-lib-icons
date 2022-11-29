import React, { FC, memo } from 'react';
import GamepadDownSvg from '../svg/gamepad-down.svg';

export interface IGamepadDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GamepadDownIcon: FC<IGamepadDownIconProps> = memo(props => {
  return <GamepadDownSvg {...props} />;
});
