import React, { FC, memo } from 'react';
import EllipseSvg from '../svg/ellipse.svg';

export interface IEllipseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EllipseIcon: FC<IEllipseIconProps> = memo(props => {
  return <EllipseSvg {...props} />;
});
