import React, { FC, memo } from 'react';
import InboxArrowDownSvg from '../svg/inbox-arrow-down.svg';

export interface IInboxArrowDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const InboxArrowDownIcon: FC<IInboxArrowDownIconProps> = memo(props => {
  return <InboxArrowDownSvg {...props} />;
});
