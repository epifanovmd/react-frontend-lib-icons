import React, { FC, memo } from 'react';
import BriefcaseDownloadOutlineSvg from '../svg/briefcase-download-outline.svg';

export interface IBriefcaseDownloadOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseDownloadOutlineIcon: FC<IBriefcaseDownloadOutlineIconProps> = memo(props => {
  return <BriefcaseDownloadOutlineSvg {...props} />;
});
