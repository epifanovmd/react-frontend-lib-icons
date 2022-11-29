import React, { FC, memo } from 'react';
import MiddlewareSvg from '../svg/middleware.svg';

export interface IMiddlewareIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MiddlewareIcon: FC<IMiddlewareIconProps> = memo(props => {
  return <MiddlewareSvg {...props} />;
});
