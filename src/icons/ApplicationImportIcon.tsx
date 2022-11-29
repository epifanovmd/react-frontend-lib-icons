import React, { FC, memo } from 'react';
import ApplicationImportSvg from '../svg/application-import.svg';

export interface IApplicationImportIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApplicationImportIcon: FC<IApplicationImportIconProps> = memo(props => {
  return <ApplicationImportSvg {...props} />;
});
