import React, { FC, memo } from 'react';
import GamepadRoundUpSvg from '../svg/gamepad-round-up.svg';

export interface IGamepadRoundUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GamepadRoundUpIcon: FC<IGamepadRoundUpIconProps> = memo(props => {
  return <GamepadRoundUpSvg {...props} />;
});
