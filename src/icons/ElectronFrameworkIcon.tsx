import React, { FC, memo } from 'react';
import ElectronFrameworkSvg from '../svg/electron-framework.svg';

export interface IElectronFrameworkIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ElectronFrameworkIcon: FC<IElectronFrameworkIconProps> = memo(props => {
  return <ElectronFrameworkSvg {...props} />;
});
