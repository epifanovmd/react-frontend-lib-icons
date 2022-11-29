import React, { FC, memo } from 'react';
import BriefcaseSearchSvg from '../svg/briefcase-search.svg';

export interface IBriefcaseSearchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseSearchIcon: FC<IBriefcaseSearchIconProps> = memo(props => {
  return <BriefcaseSearchSvg {...props} />;
});
