import React, { FC, memo } from 'react';
import FileChartCheckSvg from '../svg/file-chart-check.svg';

export interface IFileChartCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileChartCheckIcon: FC<IFileChartCheckIconProps> = memo(props => {
  return <FileChartCheckSvg {...props} />;
});
