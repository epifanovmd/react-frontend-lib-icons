import React, { FC, memo } from 'react';
import GamepadVariantOutlineSvg from '../svg/gamepad-variant-outline.svg';

export interface IGamepadVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GamepadVariantOutlineIcon: FC<IGamepadVariantOutlineIconProps> = memo(props => {
  return <GamepadVariantOutlineSvg {...props} />;
});
