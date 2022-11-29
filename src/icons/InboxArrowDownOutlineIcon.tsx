import React, { FC, memo } from 'react';
import InboxArrowDownOutlineSvg from '../svg/inbox-arrow-down-outline.svg';

export interface IInboxArrowDownOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const InboxArrowDownOutlineIcon: FC<IInboxArrowDownOutlineIconProps> = memo(props => {
  return <InboxArrowDownOutlineSvg {...props} />;
});
