import React, { FC, memo } from 'react';
import ApplicationCogOutlineSvg from '../svg/application-cog-outline.svg';

export interface IApplicationCogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApplicationCogOutlineIcon: FC<IApplicationCogOutlineIconProps> = memo(props => {
  return <ApplicationCogOutlineSvg {...props} />;
});
