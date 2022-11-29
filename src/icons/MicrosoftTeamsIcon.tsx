import React, { FC, memo } from 'react';
import MicrosoftTeamsSvg from '../svg/microsoft-teams.svg';

export interface IMicrosoftTeamsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MicrosoftTeamsIcon: FC<IMicrosoftTeamsIconProps> = memo(props => {
  return <MicrosoftTeamsSvg {...props} />;
});
