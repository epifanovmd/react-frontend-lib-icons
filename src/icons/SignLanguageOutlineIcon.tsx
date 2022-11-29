import React, { FC, memo } from 'react';
import SignLanguageOutlineSvg from '../svg/sign-language-outline.svg';

export interface ISignLanguageOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SignLanguageOutlineIcon: FC<ISignLanguageOutlineIconProps> = memo(props => {
  return <SignLanguageOutlineSvg {...props} />;
});
