import React, { FC, memo } from 'react';
import BriefcaseRemoveOutlineSvg from '../svg/briefcase-remove-outline.svg';

export interface IBriefcaseRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseRemoveOutlineIcon: FC<IBriefcaseRemoveOutlineIconProps> = memo(props => {
  return <BriefcaseRemoveOutlineSvg {...props} />;
});
