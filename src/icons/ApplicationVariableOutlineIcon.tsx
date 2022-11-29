import React, { FC, memo } from 'react';
import ApplicationVariableOutlineSvg from '../svg/application-variable-outline.svg';

export interface IApplicationVariableOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApplicationVariableOutlineIcon: FC<IApplicationVariableOutlineIconProps> = memo(props => {
  return <ApplicationVariableOutlineSvg {...props} />;
});
