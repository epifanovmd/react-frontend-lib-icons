import React, { FC, memo } from 'react';
import GamepadCircleSvg from '../svg/gamepad-circle.svg';

export interface IGamepadCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GamepadCircleIcon: FC<IGamepadCircleIconProps> = memo(props => {
  return <GamepadCircleSvg {...props} />;
});
