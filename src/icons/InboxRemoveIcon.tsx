import React, { FC, memo } from 'react';
import InboxRemoveSvg from '../svg/inbox-remove.svg';

export interface IInboxRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const InboxRemoveIcon: FC<IInboxRemoveIconProps> = memo(props => {
  return <InboxRemoveSvg {...props} />;
});
