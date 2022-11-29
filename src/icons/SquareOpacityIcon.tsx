import React, { FC, memo } from 'react';
import SquareOpacitySvg from '../svg/square-opacity.svg';

export interface ISquareOpacityIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SquareOpacityIcon: FC<ISquareOpacityIconProps> = memo(props => {
  return <SquareOpacitySvg {...props} />;
});
