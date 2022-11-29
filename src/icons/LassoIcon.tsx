import React, { FC, memo } from 'react';
import LassoSvg from '../svg/lasso.svg';

export interface ILassoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LassoIcon: FC<ILassoIconProps> = memo(props => {
  return <LassoSvg {...props} />;
});
