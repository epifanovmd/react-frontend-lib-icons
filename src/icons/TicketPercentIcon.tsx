import React, { FC, memo } from 'react';
import TicketPercentSvg from '../svg/ticket-percent.svg';

export interface ITicketPercentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TicketPercentIcon: FC<ITicketPercentIconProps> = memo(props => {
  return <TicketPercentSvg {...props} />;
});
