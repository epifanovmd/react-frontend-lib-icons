import React, { FC, memo } from 'react';
import LanguageXamlSvg from '../svg/language-xaml.svg';

export interface ILanguageXamlIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanguageXamlIcon: FC<ILanguageXamlIconProps> = memo(props => {
  return <LanguageXamlSvg {...props} />;
});
