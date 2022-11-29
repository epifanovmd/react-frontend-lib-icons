import React, { FC, memo } from 'react';
import SpraySvg from '../svg/spray.svg';

export interface ISprayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SprayIcon: FC<ISprayIconProps> = memo(props => {
  return <SpraySvg {...props} />;
});
