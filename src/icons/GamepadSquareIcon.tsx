import React, { FC, memo } from 'react';
import GamepadSquareSvg from '../svg/gamepad-square.svg';

export interface IGamepadSquareIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GamepadSquareIcon: FC<IGamepadSquareIconProps> = memo(props => {
  return <GamepadSquareSvg {...props} />;
});
