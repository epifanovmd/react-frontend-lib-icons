import React, { FC, memo } from 'react';
import GamepadRoundDownSvg from '../svg/gamepad-round-down.svg';

export interface IGamepadRoundDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GamepadRoundDownIcon: FC<IGamepadRoundDownIconProps> = memo(props => {
  return <GamepadRoundDownSvg {...props} />;
});
