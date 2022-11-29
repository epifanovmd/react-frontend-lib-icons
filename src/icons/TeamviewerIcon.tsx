import React, { FC, memo } from 'react';
import TeamviewerSvg from '../svg/teamviewer.svg';

export interface ITeamviewerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TeamviewerIcon: FC<ITeamviewerIconProps> = memo(props => {
  return <TeamviewerSvg {...props} />;
});
