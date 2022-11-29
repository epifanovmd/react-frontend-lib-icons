import React, { FC, memo } from 'react';
import MessageImageSvg from '../svg/message-image.svg';

export interface IMessageImageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageImageIcon: FC<IMessageImageIconProps> = memo(props => {
  return <MessageImageSvg {...props} />;
});
