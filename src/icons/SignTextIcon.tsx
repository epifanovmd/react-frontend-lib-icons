import React, { FC, memo } from 'react';
import SignTextSvg from '../svg/sign-text.svg';

export interface ISignTextIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignTextIcon: FC<ISignTextIconProps> = memo(props => {
  return <SignTextSvg {...props} />;
});
