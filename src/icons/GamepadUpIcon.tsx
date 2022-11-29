import React, { FC, memo } from 'react';
import GamepadUpSvg from '../svg/gamepad-up.svg';

export interface IGamepadUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GamepadUpIcon: FC<IGamepadUpIconProps> = memo(props => {
  return <GamepadUpSvg {...props} />;
});
