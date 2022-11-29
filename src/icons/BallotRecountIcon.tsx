import React, { FC, memo } from 'react';
import BallotRecountSvg from '../svg/ballot-recount.svg';

export interface IBallotRecountIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BallotRecountIcon: FC<IBallotRecountIconProps> = memo(props => {
  return <BallotRecountSvg {...props} />;
});
