import React, { FC, memo } from 'react';
import BaseballSvg from '../svg/baseball.svg';

export interface IBaseballIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BaseballIcon: FC<IBaseballIconProps> = memo(props => {
  return <BaseballSvg {...props} />;
});
