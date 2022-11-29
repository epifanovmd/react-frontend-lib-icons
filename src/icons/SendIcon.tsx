import React, { FC, memo } from 'react';
import SendSvg from '../svg/send.svg';

export interface ISendIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SendIcon: FC<ISendIconProps> = memo(props => {
  return <SendSvg {...props} />;
});
