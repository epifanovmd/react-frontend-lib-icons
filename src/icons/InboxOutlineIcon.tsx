import React, { FC, memo } from 'react';
import InboxOutlineSvg from '../svg/inbox-outline.svg';

export interface IInboxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const InboxOutlineIcon: FC<IInboxOutlineIconProps> = memo(props => {
  return <InboxOutlineSvg {...props} />;
});
