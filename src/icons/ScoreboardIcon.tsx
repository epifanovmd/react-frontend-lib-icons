import React, { FC, memo } from 'react';
import ScoreboardSvg from '../svg/scoreboard.svg';

export interface IScoreboardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScoreboardIcon: FC<IScoreboardIconProps> = memo(props => {
  return <ScoreboardSvg {...props} />;
});
