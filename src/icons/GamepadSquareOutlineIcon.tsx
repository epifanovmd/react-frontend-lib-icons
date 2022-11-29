import React, { FC, memo } from 'react';
import GamepadSquareOutlineSvg from '../svg/gamepad-square-outline.svg';

export interface IGamepadSquareOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GamepadSquareOutlineIcon: FC<IGamepadSquareOutlineIconProps> = memo(props => {
  return <GamepadSquareOutlineSvg {...props} />;
});
