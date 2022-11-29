import React, { FC, memo } from 'react';
import ControllerClassicOutlineSvg from '../svg/controller-classic-outline.svg';

export interface IControllerClassicOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ControllerClassicOutlineIcon: FC<IControllerClassicOutlineIconProps> = memo(props => {
  return <ControllerClassicOutlineSvg {...props} />;
});
