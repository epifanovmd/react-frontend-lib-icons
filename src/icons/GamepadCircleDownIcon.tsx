import React, { FC, memo } from 'react';
import GamepadCircleDownSvg from '../svg/gamepad-circle-down.svg';

export interface IGamepadCircleDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GamepadCircleDownIcon: FC<IGamepadCircleDownIconProps> = memo(props => {
  return <GamepadCircleDownSvg {...props} />;
});
