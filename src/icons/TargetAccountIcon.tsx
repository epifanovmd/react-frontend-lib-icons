import React, { FC, memo } from 'react';
import TargetAccountSvg from '../svg/target-account.svg';

export interface ITargetAccountIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TargetAccountIcon: FC<ITargetAccountIconProps> = memo(props => {
  return <TargetAccountSvg {...props} />;
});
