import React, { FC, memo } from 'react';
import CheckerboardSvg from '../svg/checkerboard.svg';

export interface ICheckerboardIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckerboardIcon: FC<ICheckerboardIconProps> = memo(props => {
  return <CheckerboardSvg {...props} />;
});
