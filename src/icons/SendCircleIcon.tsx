import React, { FC, memo } from 'react';
import SendCircleSvg from '../svg/send-circle.svg';

export interface ISendCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SendCircleIcon: FC<ISendCircleIconProps> = memo(props => {
  return <SendCircleSvg {...props} />;
});
