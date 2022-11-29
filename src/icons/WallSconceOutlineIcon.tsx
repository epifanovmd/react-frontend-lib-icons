import React, { FC, memo } from 'react';
import WallSconceOutlineSvg from '../svg/wall-sconce-outline.svg';

export interface IWallSconceOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WallSconceOutlineIcon: FC<IWallSconceOutlineIconProps> = memo(props => {
  return <WallSconceOutlineSvg {...props} />;
});
