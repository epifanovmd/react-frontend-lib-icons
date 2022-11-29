import React, { FC, memo } from 'react';
import ScoreboardOutlineSvg from '../svg/scoreboard-outline.svg';

export interface IScoreboardOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScoreboardOutlineIcon: FC<IScoreboardOutlineIconProps> = memo(props => {
  return <ScoreboardOutlineSvg {...props} />;
});
