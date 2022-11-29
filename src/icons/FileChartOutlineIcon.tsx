import React, { FC, memo } from 'react';
import FileChartOutlineSvg from '../svg/file-chart-outline.svg';

export interface IFileChartOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FileChartOutlineIcon: FC<IFileChartOutlineIconProps> = memo(props => {
  return <FileChartOutlineSvg {...props} />;
});
