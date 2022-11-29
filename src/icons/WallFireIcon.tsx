import React, { FC, memo } from 'react';
import WallFireSvg from '../svg/wall-fire.svg';

export interface IWallFireIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WallFireIcon: FC<IWallFireIconProps> = memo(props => {
  return <WallFireSvg {...props} />;
});
