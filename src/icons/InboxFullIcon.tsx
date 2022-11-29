import React, { FC, memo } from 'react';
import InboxFullSvg from '../svg/inbox-full.svg';

export interface IInboxFullIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const InboxFullIcon: FC<IInboxFullIconProps> = memo(props => {
  return <InboxFullSvg {...props} />;
});
