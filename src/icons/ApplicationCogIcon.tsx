import React, { FC, memo } from 'react';
import ApplicationCogSvg from '../svg/application-cog.svg';

export interface IApplicationCogIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApplicationCogIcon: FC<IApplicationCogIconProps> = memo(props => {
  return <ApplicationCogSvg {...props} />;
});
