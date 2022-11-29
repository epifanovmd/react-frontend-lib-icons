import React, { FC, memo } from 'react';
import SignDirectionPlusSvg from '../svg/sign-direction-plus.svg';

export interface ISignDirectionPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignDirectionPlusIcon: FC<ISignDirectionPlusIconProps> = memo(props => {
  return <SignDirectionPlusSvg {...props} />;
});
