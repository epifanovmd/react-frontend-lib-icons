import React, { FC, memo } from 'react';
import BriefcaseEditSvg from '../svg/briefcase-edit.svg';

export interface IBriefcaseEditIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseEditIcon: FC<IBriefcaseEditIconProps> = memo(props => {
  return <BriefcaseEditSvg {...props} />;
});
