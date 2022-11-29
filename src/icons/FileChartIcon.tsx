import React, { FC, memo } from 'react';
import FileChartSvg from '../svg/file-chart.svg';

export interface IFileChartIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileChartIcon: FC<IFileChartIconProps> = memo(props => {
  return <FileChartSvg {...props} />;
});
