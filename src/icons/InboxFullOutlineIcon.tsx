import React, { FC, memo } from 'react';
import InboxFullOutlineSvg from '../svg/inbox-full-outline.svg';

export interface IInboxFullOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const InboxFullOutlineIcon: FC<IInboxFullOutlineIconProps> = memo(props => {
  return <InboxFullOutlineSvg {...props} />;
});
