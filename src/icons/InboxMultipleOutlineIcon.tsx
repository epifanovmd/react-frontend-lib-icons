import React, { FC, memo } from 'react';
import InboxMultipleOutlineSvg from '../svg/inbox-multiple-outline.svg';

export interface IInboxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const InboxMultipleOutlineIcon: FC<IInboxMultipleOutlineIconProps> = memo(props => {
  return <InboxMultipleOutlineSvg {...props} />;
});
