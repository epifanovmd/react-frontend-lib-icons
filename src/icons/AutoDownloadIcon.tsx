import React, { FC, memo } from 'react';
import AutoDownloadSvg from '../svg/auto-download.svg';

export interface IAutoDownloadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AutoDownloadIcon: FC<IAutoDownloadIconProps> = memo(props => {
  return <AutoDownloadSvg {...props} />;
});
