import React, { FC, memo } from 'react';
import BriefcaseRemoveSvg from '../svg/briefcase-remove.svg';

export interface IBriefcaseRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BriefcaseRemoveIcon: FC<IBriefcaseRemoveIconProps> = memo(props => {
  return <BriefcaseRemoveSvg {...props} />;
});
