import React, { FC, memo } from 'react';
import ExcavatorSvg from '../svg/excavator.svg';

export interface IExcavatorIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ExcavatorIcon: FC<IExcavatorIconProps> = memo(props => {
  return <ExcavatorSvg {...props} />;
});
