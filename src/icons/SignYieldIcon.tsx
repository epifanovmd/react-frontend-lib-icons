import React, { FC, memo } from 'react';
import SignYieldSvg from '../svg/sign-yield.svg';

export interface ISignYieldIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignYieldIcon: FC<ISignYieldIconProps> = memo(props => {
  return <SignYieldSvg {...props} />;
});
