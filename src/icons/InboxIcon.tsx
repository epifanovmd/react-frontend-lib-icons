import React, { FC, memo } from 'react';
import InboxSvg from '../svg/inbox.svg';

export interface IInboxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const InboxIcon: FC<IInboxIconProps> = memo(props => {
  return <InboxSvg {...props} />;
});
