import React, { FC, memo } from 'react';
import AppsSvg from '../svg/apps.svg';

export interface IAppsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AppsIcon: FC<IAppsIconProps> = memo(props => {
  return <AppsSvg {...props} />;
});
