import React, { FC, memo } from 'react';
import WallSvg from '../svg/wall.svg';

export interface IWallIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WallIcon: FC<IWallIconProps> = memo(props => {
  return <WallSvg {...props} />;
});
