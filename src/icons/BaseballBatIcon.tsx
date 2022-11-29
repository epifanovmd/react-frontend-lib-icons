import React, { FC, memo } from 'react';
import BaseballBatSvg from '../svg/baseball-bat.svg';

export interface IBaseballBatIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BaseballBatIcon: FC<IBaseballBatIconProps> = memo(props => {
  return <BaseballBatSvg {...props} />;
});
