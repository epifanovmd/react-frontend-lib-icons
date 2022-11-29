import React, { FC, memo } from 'react';
import InboxArrowUpOutlineSvg from '../svg/inbox-arrow-up-outline.svg';

export interface IInboxArrowUpOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const InboxArrowUpOutlineIcon: FC<IInboxArrowUpOutlineIconProps> = memo(props => {
  return <InboxArrowUpOutlineSvg {...props} />;
});
