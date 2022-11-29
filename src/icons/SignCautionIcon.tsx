import React, { FC, memo } from 'react';
import SignCautionSvg from '../svg/sign-caution.svg';

export interface ISignCautionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignCautionIcon: FC<ISignCautionIconProps> = memo(props => {
  return <SignCautionSvg {...props} />;
});
