import React, { FC, memo } from 'react';
import TriangleSmallUpSvg from '../svg/triangle-small-up.svg';

export interface ITriangleSmallUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TriangleSmallUpIcon: FC<ITriangleSmallUpIconProps> = memo(props => {
  return <TriangleSmallUpSvg {...props} />;
});
