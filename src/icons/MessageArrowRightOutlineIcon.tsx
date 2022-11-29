import React, { FC, memo } from 'react';
import MessageArrowRightOutlineSvg from '../svg/message-arrow-right-outline.svg';

export interface IMessageArrowRightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MessageArrowRightOutlineIcon: FC<IMessageArrowRightOutlineIconProps> = memo(props => {
  return <MessageArrowRightOutlineSvg {...props} />;
});
