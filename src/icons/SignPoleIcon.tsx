import React, { FC, memo } from 'react';
import SignPoleSvg from '../svg/sign-pole.svg';

export interface ISignPoleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignPoleIcon: FC<ISignPoleIconProps> = memo(props => {
  return <SignPoleSvg {...props} />;
});
