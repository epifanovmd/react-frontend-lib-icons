import React, { FC, memo } from 'react';
import TicketPercentOutlineSvg from '../svg/ticket-percent-outline.svg';

export interface ITicketPercentOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TicketPercentOutlineIcon: FC<ITicketPercentOutlineIconProps> = memo(props => {
  return <TicketPercentOutlineSvg {...props} />;
});
