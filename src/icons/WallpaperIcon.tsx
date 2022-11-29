import React, { FC, memo } from 'react';
import WallpaperSvg from '../svg/wallpaper.svg';

export interface IWallpaperIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WallpaperIcon: FC<IWallpaperIconProps> = memo(props => {
  return <WallpaperSvg {...props} />;
});
