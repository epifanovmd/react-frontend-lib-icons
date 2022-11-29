import React, { FC, memo } from 'react';
import ExportSvg from '../svg/export.svg';

export interface IExportIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ExportIcon: FC<IExportIconProps> = memo(props => {
  return <ExportSvg {...props} />;
});
