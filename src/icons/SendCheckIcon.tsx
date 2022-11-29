import React, { FC, memo } from 'react';
import SendCheckSvg from '../svg/send-check.svg';

export interface ISendCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SendCheckIcon: FC<ISendCheckIconProps> = memo(props => {
  return <SendCheckSvg {...props} />;
});
