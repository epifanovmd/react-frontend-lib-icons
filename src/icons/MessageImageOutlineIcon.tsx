import React, { FC, memo } from 'react';
import MessageImageOutlineSvg from '../svg/message-image-outline.svg';

export interface IMessageImageOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageImageOutlineIcon: FC<IMessageImageOutlineIconProps> = memo(props => {
  return <MessageImageOutlineSvg {...props} />;
});
