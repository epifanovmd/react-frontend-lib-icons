import React, { FC, memo } from 'react';
import PyramidSvg from '../svg/pyramid.svg';

export interface IPyramidIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PyramidIcon: FC<IPyramidIconProps> = memo(props => {
  return <PyramidSvg {...props} />;
});
