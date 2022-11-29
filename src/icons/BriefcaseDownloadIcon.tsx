import React, { FC, memo } from 'react';
import BriefcaseDownloadSvg from '../svg/briefcase-download.svg';

export interface IBriefcaseDownloadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseDownloadIcon: FC<IBriefcaseDownloadIconProps> = memo(props => {
  return <BriefcaseDownloadSvg {...props} />;
});
