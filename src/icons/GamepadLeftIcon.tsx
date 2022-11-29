import React, { FC, memo } from 'react';
import GamepadLeftSvg from '../svg/gamepad-left.svg';

export interface IGamepadLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GamepadLeftIcon: FC<IGamepadLeftIconProps> = memo(props => {
  return <GamepadLeftSvg {...props} />;
});
