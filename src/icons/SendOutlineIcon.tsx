import React, { FC, memo } from 'react';
import SendOutlineSvg from '../svg/send-outline.svg';

export interface ISendOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SendOutlineIcon: FC<ISendOutlineIconProps> = memo(props => {
  return <SendOutlineSvg {...props} />;
});
