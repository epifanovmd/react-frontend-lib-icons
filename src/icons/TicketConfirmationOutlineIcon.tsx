import React, { FC, memo } from 'react';
import TicketConfirmationOutlineSvg from '../svg/ticket-confirmation-outline.svg';

export interface ITicketConfirmationOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TicketConfirmationOutlineIcon: FC<ITicketConfirmationOutlineIconProps> = memo(props => {
  return <TicketConfirmationOutlineSvg {...props} />;
});
