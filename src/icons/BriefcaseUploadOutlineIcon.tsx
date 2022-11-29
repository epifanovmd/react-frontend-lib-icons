import React, { FC, memo } from 'react';
import BriefcaseUploadOutlineSvg from '../svg/briefcase-upload-outline.svg';

export interface IBriefcaseUploadOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseUploadOutlineIcon: FC<IBriefcaseUploadOutlineIconProps> = memo(props => {
  return <BriefcaseUploadOutlineSvg {...props} />;
});
