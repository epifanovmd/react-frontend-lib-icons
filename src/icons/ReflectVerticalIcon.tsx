import React, { FC, memo } from 'react';
import ReflectVerticalSvg from '../svg/reflect-vertical.svg';

export interface IReflectVerticalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReflectVerticalIcon: FC<IReflectVerticalIconProps> = memo(props => {
  return <ReflectVerticalSvg {...props} />;
});
