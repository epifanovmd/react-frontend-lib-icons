import React, { FC, memo } from 'react';
import TicketConfirmationSvg from '../svg/ticket-confirmation.svg';

export interface ITicketConfirmationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TicketConfirmationIcon: FC<ITicketConfirmationIconProps> = memo(props => {
  return <TicketConfirmationSvg {...props} />;
});
