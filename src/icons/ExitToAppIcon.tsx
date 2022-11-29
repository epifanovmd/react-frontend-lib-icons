import React, { FC, memo } from 'react';
import ExitToAppSvg from '../svg/exit-to-app.svg';

export interface IExitToAppIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ExitToAppIcon: FC<IExitToAppIconProps> = memo(props => {
  return <ExitToAppSvg {...props} />;
});
