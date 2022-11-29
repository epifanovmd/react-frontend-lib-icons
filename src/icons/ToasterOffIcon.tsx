import React, { FC, memo } from 'react';
import ToasterOffSvg from '../svg/toaster-off.svg';

export interface IToasterOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToasterOffIcon: FC<IToasterOffIconProps> = memo(props => {
  return <ToasterOffSvg {...props} />;
});
