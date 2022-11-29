import React, { FC, memo } from 'react';
import SignLanguageSvg from '../svg/sign-language.svg';

export interface ISignLanguageIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignLanguageIcon: FC<ISignLanguageIconProps> = memo(props => {
  return <SignLanguageSvg {...props} />;
});
