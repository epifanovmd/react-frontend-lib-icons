import React, { FC, memo } from 'react';
import TicketOutlineSvg from '../svg/ticket-outline.svg';

export interface ITicketOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TicketOutlineIcon: FC<ITicketOutlineIconProps> = memo(props => {
  return <TicketOutlineSvg {...props} />;
});
