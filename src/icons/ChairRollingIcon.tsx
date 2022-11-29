import React, { FC, memo } from 'react';
import ChairRollingSvg from '../svg/chair-rolling.svg';

export interface IChairRollingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChairRollingIcon: FC<IChairRollingIconProps> = memo(props => {
  return <ChairRollingSvg {...props} />;
});
