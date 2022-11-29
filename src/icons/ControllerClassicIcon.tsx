import React, { FC, memo } from 'react';
import ControllerClassicSvg from '../svg/controller-classic.svg';

export interface IControllerClassicIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ControllerClassicIcon: FC<IControllerClassicIconProps> = memo(props => {
  return <ControllerClassicSvg {...props} />;
});
