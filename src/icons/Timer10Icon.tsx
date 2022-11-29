import React, { FC, memo } from 'react';
import Timer10Svg from '../svg/timer-10.svg';

export interface ITimer10IconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const Timer10Icon: FC<ITimer10IconProps> = memo(props => {
  return <Timer10Svg {...props} />;
});
