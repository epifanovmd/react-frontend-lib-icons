import React, { FC, memo } from 'react';
import ProgressDownloadSvg from '../svg/progress-download.svg';

export interface IProgressDownloadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ProgressDownloadIcon: FC<IProgressDownloadIconProps> = memo(props => {
  return <ProgressDownloadSvg {...props} />;
});
