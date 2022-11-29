import React, { FC, memo } from 'react';
import ViewModuleSvg from '../svg/view-module.svg';

export interface IViewModuleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewModuleIcon: FC<IViewModuleIconProps> = memo(props => {
  return <ViewModuleSvg {...props} />;
});
