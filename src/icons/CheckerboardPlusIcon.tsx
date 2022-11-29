import React, { FC, memo } from 'react';
import CheckerboardPlusSvg from '../svg/checkerboard-plus.svg';

export interface ICheckerboardPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckerboardPlusIcon: FC<ICheckerboardPlusIconProps> = memo(props => {
  return <CheckerboardPlusSvg {...props} />;
});
