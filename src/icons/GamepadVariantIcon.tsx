import React, { FC, memo } from 'react';
import GamepadVariantSvg from '../svg/gamepad-variant.svg';

export interface IGamepadVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GamepadVariantIcon: FC<IGamepadVariantIconProps> = memo(props => {
  return <GamepadVariantSvg {...props} />;
});
