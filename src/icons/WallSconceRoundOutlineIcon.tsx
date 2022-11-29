import React, { FC, memo } from 'react';
import WallSconceRoundOutlineSvg from '../svg/wall-sconce-round-outline.svg';

export interface IWallSconceRoundOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WallSconceRoundOutlineIcon: FC<IWallSconceRoundOutlineIconProps> = memo(props => {
  return <WallSconceRoundOutlineSvg {...props} />;
});
