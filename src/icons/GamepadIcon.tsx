import React, { FC, memo } from 'react';
import GamepadSvg from '../svg/gamepad.svg';

export interface IGamepadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GamepadIcon: FC<IGamepadIconProps> = memo(props => {
  return <GamepadSvg {...props} />;
});
