import React, { FC, memo } from 'react';
import FlagTriangleSvg from '../svg/flag-triangle.svg';

export interface IFlagTriangleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlagTriangleIcon: FC<IFlagTriangleIconProps> = memo(props => {
  return <FlagTriangleSvg {...props} />;
});
