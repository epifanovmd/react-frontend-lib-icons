import React, { FC, memo } from 'react';
import GamepadCircleLeftSvg from '../svg/gamepad-circle-left.svg';

export interface IGamepadCircleLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GamepadCircleLeftIcon: FC<IGamepadCircleLeftIconProps> = memo(props => {
  return <GamepadCircleLeftSvg {...props} />;
});
