import React, { FC, memo } from 'react';
import ApplicationExportSvg from '../svg/application-export.svg';

export interface IApplicationExportIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApplicationExportIcon: FC<IApplicationExportIconProps> = memo(props => {
  return <ApplicationExportSvg {...props} />;
});
