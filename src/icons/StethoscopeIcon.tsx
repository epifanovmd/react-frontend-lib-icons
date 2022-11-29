import React, { FC, memo } from 'react';
import StethoscopeSvg from '../svg/stethoscope.svg';

export interface IStethoscopeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StethoscopeIcon: FC<IStethoscopeIconProps> = memo(props => {
  return <StethoscopeSvg {...props} />;
});
