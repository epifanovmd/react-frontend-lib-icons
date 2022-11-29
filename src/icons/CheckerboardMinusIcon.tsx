import React, { FC, memo } from 'react';
import CheckerboardMinusSvg from '../svg/checkerboard-minus.svg';

export interface ICheckerboardMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckerboardMinusIcon: FC<ICheckerboardMinusIconProps> = memo(props => {
  return <CheckerboardMinusSvg {...props} />;
});
