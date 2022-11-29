import React, { FC, memo } from 'react';
import WallSconceRoundSvg from '../svg/wall-sconce-round.svg';

export interface IWallSconceRoundIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WallSconceRoundIcon: FC<IWallSconceRoundIconProps> = memo(props => {
  return <WallSconceRoundSvg {...props} />;
});
