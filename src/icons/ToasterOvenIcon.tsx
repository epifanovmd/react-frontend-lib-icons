import React, { FC, memo } from 'react';
import ToasterOvenSvg from '../svg/toaster-oven.svg';

export interface IToasterOvenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToasterOvenIcon: FC<IToasterOvenIconProps> = memo(props => {
  return <ToasterOvenSvg {...props} />;
});
