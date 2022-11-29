import React, { FC, memo } from 'react';
import GamepadCircleOutlineSvg from '../svg/gamepad-circle-outline.svg';

export interface IGamepadCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GamepadCircleOutlineIcon: FC<IGamepadCircleOutlineIconProps> = memo(props => {
  return <GamepadCircleOutlineSvg {...props} />;
});
