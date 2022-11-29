import React, { FC, memo } from 'react';
import ViewAgendaSvg from '../svg/view-agenda.svg';

export interface IViewAgendaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewAgendaIcon: FC<IViewAgendaIconProps> = memo(props => {
  return <ViewAgendaSvg {...props} />;
});
