import React, { FC, memo } from 'react';
import ApplicationSvg from '../svg/application.svg';

export interface IApplicationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApplicationIcon: FC<IApplicationIconProps> = memo(props => {
  return <ApplicationSvg {...props} />;
});
