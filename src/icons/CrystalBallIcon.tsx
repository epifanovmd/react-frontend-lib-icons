import React, { FC, memo } from 'react';
import CrystalBallSvg from '../svg/crystal-ball.svg';

export interface ICrystalBallIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CrystalBallIcon: FC<ICrystalBallIconProps> = memo(props => {
  return <CrystalBallSvg {...props} />;
});
