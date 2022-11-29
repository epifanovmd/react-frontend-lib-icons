import React, { FC, memo } from 'react';
import BriefcaseUploadSvg from '../svg/briefcase-upload.svg';

export interface IBriefcaseUploadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseUploadIcon: FC<IBriefcaseUploadIconProps> = memo(props => {
  return <BriefcaseUploadSvg {...props} />;
});
