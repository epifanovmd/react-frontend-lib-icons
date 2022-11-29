import React, { FC, memo } from 'react';
import GamepadOutlineSvg from '../svg/gamepad-outline.svg';

export interface IGamepadOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GamepadOutlineIcon: FC<IGamepadOutlineIconProps> = memo(props => {
  return <GamepadOutlineSvg {...props} />;
});
