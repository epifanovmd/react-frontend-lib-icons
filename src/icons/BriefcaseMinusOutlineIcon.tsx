import React, { FC, memo } from 'react';
import BriefcaseMinusOutlineSvg from '../svg/briefcase-minus-outline.svg';

export interface IBriefcaseMinusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseMinusOutlineIcon: FC<IBriefcaseMinusOutlineIconProps> = memo(props => {
  return <BriefcaseMinusOutlineSvg {...props} />;
});
