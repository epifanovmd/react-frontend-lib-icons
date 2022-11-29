import React, { FC, memo } from 'react';
import BriefcaseSearchOutlineSvg from '../svg/briefcase-search-outline.svg';

export interface IBriefcaseSearchOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseSearchOutlineIcon: FC<IBriefcaseSearchOutlineIconProps> = memo(props => {
  return <BriefcaseSearchOutlineSvg {...props} />;
});
