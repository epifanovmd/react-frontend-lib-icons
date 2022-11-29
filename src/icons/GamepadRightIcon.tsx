import React, { FC, memo } from 'react';
import GamepadRightSvg from '../svg/gamepad-right.svg';

export interface IGamepadRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GamepadRightIcon: FC<IGamepadRightIconProps> = memo(props => {
  return <GamepadRightSvg {...props} />;
});
