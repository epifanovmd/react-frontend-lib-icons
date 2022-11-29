import React, { FC, memo } from 'react';
import ScaleBalanceSvg from '../svg/scale-balance.svg';

export interface IScaleBalanceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScaleBalanceIcon: FC<IScaleBalanceIconProps> = memo(props => {
  return <ScaleBalanceSvg {...props} />;
});
