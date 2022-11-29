import React, { FC, memo } from 'react';
import AppsBoxSvg from '../svg/apps-box.svg';

export interface IAppsBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AppsBoxIcon: FC<IAppsBoxIconProps> = memo(props => {
  return <AppsBoxSvg {...props} />;
});
