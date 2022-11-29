import React, { FC, memo } from 'react';
import BallotSvg from '../svg/ballot.svg';

export interface IBallotIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BallotIcon: FC<IBallotIconProps> = memo(props => {
  return <BallotSvg {...props} />;
});
