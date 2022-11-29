import React, { FC, memo } from 'react';
import WallSconceSvg from '../svg/wall-sconce.svg';

export interface IWallSconceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WallSconceIcon: FC<IWallSconceIconProps> = memo(props => {
  return <WallSconceSvg {...props} />;
});
