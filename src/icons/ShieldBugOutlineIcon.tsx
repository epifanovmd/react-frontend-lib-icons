import React, { FC, memo } from 'react';
import ShieldBugOutlineSvg from '../svg/shield-bug-outline.svg';

export interface IShieldBugOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldBugOutlineIcon: FC<IShieldBugOutlineIconProps> = memo(props => {
  return <ShieldBugOutlineSvg {...props} />;
});
