import React, { FC, memo } from 'react';
import TournamentSvg from '../svg/tournament.svg';

export interface ITournamentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TournamentIcon: FC<ITournamentIconProps> = memo(props => {
  return <TournamentSvg {...props} />;
});
