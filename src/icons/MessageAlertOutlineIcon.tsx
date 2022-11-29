import React, { FC, memo } from 'react';
import MessageAlertOutlineSvg from '../svg/message-alert-outline.svg';

export interface IMessageAlertOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageAlertOutlineIcon: FC<IMessageAlertOutlineIconProps> = memo(props => {
  return <MessageAlertOutlineSvg {...props} />;
});
