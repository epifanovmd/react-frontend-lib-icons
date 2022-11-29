import React, { FC, memo } from 'react';
import PyramidOffSvg from '../svg/pyramid-off.svg';

export interface IPyramidOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PyramidOffIcon: FC<IPyramidOffIconProps> = memo(props => {
  return <PyramidOffSvg {...props} />;
});
