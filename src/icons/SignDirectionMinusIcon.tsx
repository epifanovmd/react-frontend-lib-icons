import React, { FC, memo } from 'react';
import SignDirectionMinusSvg from '../svg/sign-direction-minus.svg';

export interface ISignDirectionMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignDirectionMinusIcon: FC<ISignDirectionMinusIconProps> = memo(props => {
  return <SignDirectionMinusSvg {...props} />;
});
