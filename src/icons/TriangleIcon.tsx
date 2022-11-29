import React, { FC, memo } from 'react';
import TriangleSvg from '../svg/triangle.svg';

export interface ITriangleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TriangleIcon: FC<ITriangleIconProps> = memo(props => {
  return <TriangleSvg {...props} />;
});
