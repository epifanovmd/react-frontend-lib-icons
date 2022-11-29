import React, { FC, memo } from 'react';
import MessageOffOutlineSvg from '../svg/message-off-outline.svg';

export interface IMessageOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageOffOutlineIcon: FC<IMessageOffOutlineIconProps> = memo(props => {
  return <MessageOffOutlineSvg {...props} />;
});
