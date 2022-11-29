import React, { FC, memo } from 'react';
import InboxRemoveOutlineSvg from '../svg/inbox-remove-outline.svg';

export interface IInboxRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const InboxRemoveOutlineIcon: FC<IInboxRemoveOutlineIconProps> = memo(props => {
  return <InboxRemoveOutlineSvg {...props} />;
});
