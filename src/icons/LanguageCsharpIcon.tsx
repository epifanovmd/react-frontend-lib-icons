import React, { FC, memo } from 'react';
import LanguageCsharpSvg from '../svg/language-csharp.svg';

export interface ILanguageCsharpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanguageCsharpIcon: FC<ILanguageCsharpIconProps> = memo(props => {
  return <LanguageCsharpSvg {...props} />;
});
