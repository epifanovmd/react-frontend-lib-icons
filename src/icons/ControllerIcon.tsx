import React, { FC, memo } from 'react';
import ControllerSvg from '../svg/controller.svg';

export interface IControllerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ControllerIcon: FC<IControllerIconProps> = memo(props => {
  return <ControllerSvg {...props} />;
});
