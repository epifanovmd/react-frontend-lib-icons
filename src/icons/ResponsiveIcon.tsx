import React, { FC, memo } from 'react';
import ResponsiveSvg from '../svg/responsive.svg';

export interface IResponsiveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ResponsiveIcon: FC<IResponsiveIconProps> = memo(props => {
  return <ResponsiveSvg {...props} />;
});
