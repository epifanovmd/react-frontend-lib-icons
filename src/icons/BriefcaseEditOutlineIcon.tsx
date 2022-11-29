import React, { FC, memo } from 'react';
import BriefcaseEditOutlineSvg from '../svg/briefcase-edit-outline.svg';

export interface IBriefcaseEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseEditOutlineIcon: FC<IBriefcaseEditOutlineIconProps> = memo(props => {
  return <BriefcaseEditOutlineSvg {...props} />;
});
