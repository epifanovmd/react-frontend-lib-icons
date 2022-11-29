import React, { FC, memo } from 'react';
import MessageTextFastOutlineSvg from '../svg/message-text-fast-outline.svg';

export interface IMessageTextFastOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageTextFastOutlineIcon: FC<IMessageTextFastOutlineIconProps> = memo(props => {
  return <MessageTextFastOutlineSvg {...props} />;
});
