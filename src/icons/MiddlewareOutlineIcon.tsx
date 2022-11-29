import React, { FC, memo } from 'react';
import MiddlewareOutlineSvg from '../svg/middleware-outline.svg';

export interface IMiddlewareOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MiddlewareOutlineIcon: FC<IMiddlewareOutlineIconProps> = memo(props => {
  return <MiddlewareOutlineSvg {...props} />;
});
