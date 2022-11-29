import React, { FC, memo } from 'react';
import FileChartCheckOutlineSvg from '../svg/file-chart-check-outline.svg';

export interface IFileChartCheckOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileChartCheckOutlineIcon: FC<IFileChartCheckOutlineIconProps> = memo(props => {
  return <FileChartCheckOutlineSvg {...props} />;
});
