import React, { FC, memo } from 'react';
import ShoppingMusicSvg from '../svg/shopping-music.svg';

export interface IShoppingMusicIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShoppingMusicIcon: FC<IShoppingMusicIconProps> = memo(props => {
  return <ShoppingMusicSvg {...props} />;
});
