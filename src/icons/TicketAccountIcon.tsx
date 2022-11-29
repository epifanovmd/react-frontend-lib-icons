import React, { FC, memo } from 'react';
import TicketAccountSvg from '../svg/ticket-account.svg';

export interface ITicketAccountIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TicketAccountIcon: FC<ITicketAccountIconProps> = memo(props => {
  return <TicketAccountSvg {...props} />;
});
