import React, { FC, memo } from 'react';
import SignDirectionSvg from '../svg/sign-direction.svg';

export interface ISignDirectionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignDirectionIcon: FC<ISignDirectionIconProps> = memo(props => {
  return <SignDirectionSvg {...props} />;
});
