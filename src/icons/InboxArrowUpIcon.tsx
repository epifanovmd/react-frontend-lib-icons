import React, { FC, memo } from 'react';
import InboxArrowUpSvg from '../svg/inbox-arrow-up.svg';

export interface IInboxArrowUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const InboxArrowUpIcon: FC<IInboxArrowUpIconProps> = memo(props => {
  return <InboxArrowUpSvg {...props} />;
});
