import React, { FC, memo } from 'react';
import MinecraftSvg from '../svg/minecraft.svg';

export interface IMinecraftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MinecraftIcon: FC<IMinecraftIconProps> = memo(props => {
  return <MinecraftSvg {...props} />;
});
