import React, { FC, memo } from 'react';
import PatioHeaterSvg from '../svg/patio-heater.svg';

export interface IPatioHeaterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PatioHeaterIcon: FC<IPatioHeaterIconProps> = memo(props => {
  return <PatioHeaterSvg {...props} />;
});
