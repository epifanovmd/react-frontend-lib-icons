import React, { FC, memo } from 'react';
import AngularSvg from '../svg/angular.svg';

export interface IAngularIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AngularIcon: FC<IAngularIconProps> = memo(props => {
  return <AngularSvg {...props} />;
});
