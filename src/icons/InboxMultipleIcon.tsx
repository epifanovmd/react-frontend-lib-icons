import React, { FC, memo } from 'react';
import InboxMultipleSvg from '../svg/inbox-multiple.svg';

export interface IInboxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const InboxMultipleIcon: FC<IInboxMultipleIconProps> = memo(props => {
  return <InboxMultipleSvg {...props} />;
});
