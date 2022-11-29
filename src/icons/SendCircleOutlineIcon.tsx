import React, { FC, memo } from 'react';
import SendCircleOutlineSvg from '../svg/send-circle-outline.svg';

export interface ISendCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SendCircleOutlineIcon: FC<ISendCircleOutlineIconProps> = memo(props => {
  return <SendCircleOutlineSvg {...props} />;
});
