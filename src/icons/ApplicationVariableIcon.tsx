import React, { FC, memo } from 'react';
import ApplicationVariableSvg from '../svg/application-variable.svg';

export interface IApplicationVariableIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApplicationVariableIcon: FC<IApplicationVariableIconProps> = memo(props => {
  return <ApplicationVariableSvg {...props} />;
});
