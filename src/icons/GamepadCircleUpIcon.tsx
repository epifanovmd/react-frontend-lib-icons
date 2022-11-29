import React, { FC, memo } from 'react';
import GamepadCircleUpSvg from '../svg/gamepad-circle-up.svg';

export interface IGamepadCircleUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GamepadCircleUpIcon: FC<IGamepadCircleUpIconProps> = memo(props => {
  return <GamepadCircleUpSvg {...props} />;
});
