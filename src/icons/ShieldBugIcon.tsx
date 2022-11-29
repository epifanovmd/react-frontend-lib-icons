import React, { FC, memo } from 'react';
import ShieldBugSvg from '../svg/shield-bug.svg';

export interface IShieldBugIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShieldBugIcon: FC<IShieldBugIconProps> = memo(props => {
  return <ShieldBugSvg {...props} />;
});
