import React, { FC, memo } from 'react';
import ToothSvg from '../svg/tooth.svg';

export interface IToothIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToothIcon: FC<IToothIconProps> = memo(props => {
  return <ToothSvg {...props} />;
});
