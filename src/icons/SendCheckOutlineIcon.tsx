import React, { FC, memo } from 'react';
import SendCheckOutlineSvg from '../svg/send-check-outline.svg';

export interface ISendCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SendCheckOutlineIcon: FC<ISendCheckOutlineIconProps> = memo(props => {
  return <SendCheckOutlineSvg {...props} />;
});
