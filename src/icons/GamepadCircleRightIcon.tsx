import React, { FC, memo } from 'react';
import GamepadCircleRightSvg from '../svg/gamepad-circle-right.svg';

export interface IGamepadCircleRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GamepadCircleRightIcon: FC<IGamepadCircleRightIconProps> = memo(props => {
  return <GamepadCircleRightSvg {...props} />;
});
