import React, { FC, memo } from 'react';
import ReflectHorizontalSvg from '../svg/reflect-horizontal.svg';

export interface IReflectHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ReflectHorizontalIcon: FC<IReflectHorizontalIconProps> = memo(props => {
  return <ReflectHorizontalSvg {...props} />;
});
