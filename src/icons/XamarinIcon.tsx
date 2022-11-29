import React, { FC, memo } from 'react';
import XamarinSvg from '../svg/xamarin.svg';

export interface IXamarinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const XamarinIcon: FC<IXamarinIconProps> = memo(props => {
  return <XamarinSvg {...props} />;
});
