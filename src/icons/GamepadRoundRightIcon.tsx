import React, { FC, memo } from 'react';
import GamepadRoundRightSvg from '../svg/gamepad-round-right.svg';

export interface IGamepadRoundRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GamepadRoundRightIcon: FC<IGamepadRoundRightIconProps> = memo(props => {
  return <GamepadRoundRightSvg {...props} />;
});
