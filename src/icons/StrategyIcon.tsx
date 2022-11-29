import React, { FC, memo } from 'react';
import StrategySvg from '../svg/strategy.svg';

export interface IStrategyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StrategyIcon: FC<IStrategyIconProps> = memo(props => {
  return <StrategySvg {...props} />;
});
