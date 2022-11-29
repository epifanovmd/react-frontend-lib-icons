import React, { FC, memo } from 'react';
import GamepadRoundLeftSvg from '../svg/gamepad-round-left.svg';

export interface IGamepadRoundLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GamepadRoundLeftIcon: FC<IGamepadRoundLeftIconProps> = memo(props => {
  return <GamepadRoundLeftSvg {...props} />;
});
