import React, { FC, memo } from 'react';
import ValveSvg from '../svg/valve.svg';

export interface IValveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ValveIcon: FC<IValveIconProps> = memo(props => {
  return <ValveSvg {...props} />;
});
