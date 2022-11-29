import React, { FC, memo } from 'react';
import LaravelSvg from '../svg/laravel.svg';

export interface ILaravelIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LaravelIcon: FC<ILaravelIconProps> = memo(props => {
  return <LaravelSvg {...props} />;
});
