import React, { FC, memo } from 'react';
import TicketSvg from '../svg/ticket.svg';

export interface ITicketIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TicketIcon: FC<ITicketIconProps> = memo(props => {
  return <TicketSvg {...props} />;
});
