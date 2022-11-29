import React, { FC, memo } from 'react';
import ApplicationBracesSvg from '../svg/application-braces.svg';

export interface IApplicationBracesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApplicationBracesIcon: FC<IApplicationBracesIconProps> = memo(props => {
  return <ApplicationBracesSvg {...props} />;
});
