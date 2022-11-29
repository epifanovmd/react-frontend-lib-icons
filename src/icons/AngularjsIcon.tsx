import React, { FC, memo } from 'react';
import AngularjsSvg from '../svg/angularjs.svg';

export interface IAngularjsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AngularjsIcon: FC<IAngularjsIconProps> = memo(props => {
  return <AngularjsSvg {...props} />;
});
