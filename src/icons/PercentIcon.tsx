import React, { FC, memo } from 'react';
import PercentSvg from '../svg/percent.svg';

export interface IPercentIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PercentIcon: FC<IPercentIconProps> = memo(props => {
  return <PercentSvg {...props} />;
});
