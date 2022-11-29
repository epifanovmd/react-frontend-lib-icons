import React, { FC, memo } from 'react';
import ToasterSvg from '../svg/toaster.svg';

export interface IToasterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToasterIcon: FC<IToasterIconProps> = memo(props => {
  return <ToasterSvg {...props} />;
});
