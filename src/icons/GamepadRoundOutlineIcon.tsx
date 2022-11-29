import React, { FC, memo } from 'react';
import GamepadRoundOutlineSvg from '../svg/gamepad-round-outline.svg';

export interface IGamepadRoundOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GamepadRoundOutlineIcon: FC<IGamepadRoundOutlineIconProps> = memo(props => {
  return <GamepadRoundOutlineSvg {...props} />;
});
