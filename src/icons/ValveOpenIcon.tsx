import React, { FC, memo } from 'react';
import ValveOpenSvg from '../svg/valve-open.svg';

export interface IValveOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ValveOpenIcon: FC<IValveOpenIconProps> = memo(props => {
  return <ValveOpenSvg {...props} />;
});
