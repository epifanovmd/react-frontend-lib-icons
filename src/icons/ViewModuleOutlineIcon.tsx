import React, { FC, memo } from 'react';
import ViewModuleOutlineSvg from '../svg/view-module-outline.svg';

export interface IViewModuleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewModuleOutlineIcon: FC<IViewModuleOutlineIconProps> = memo(props => {
  return <ViewModuleOutlineSvg {...props} />;
});
