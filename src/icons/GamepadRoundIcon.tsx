import React, { FC, memo } from 'react';
import GamepadRoundSvg from '../svg/gamepad-round.svg';

export interface IGamepadRoundIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GamepadRoundIcon: FC<IGamepadRoundIconProps> = memo(props => {
  return <GamepadRoundSvg {...props} />;
});
