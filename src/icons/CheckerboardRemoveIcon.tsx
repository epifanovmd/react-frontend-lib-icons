import React, { FC, memo } from 'react';
import CheckerboardRemoveSvg from '../svg/checkerboard-remove.svg';

export interface ICheckerboardRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckerboardRemoveIcon: FC<ICheckerboardRemoveIconProps> = memo(props => {
  return <CheckerboardRemoveSvg {...props} />;
});
