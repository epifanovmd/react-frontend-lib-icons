import React, { FC, memo } from 'react';
import ViewAgendaOutlineSvg from '../svg/view-agenda-outline.svg';

export interface IViewAgendaOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewAgendaOutlineIcon: FC<IViewAgendaOutlineIconProps> = memo(props => {
  return <ViewAgendaOutlineSvg {...props} />;
});
