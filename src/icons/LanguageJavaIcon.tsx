import React, { FC, memo } from 'react';
import LanguageJavaSvg from '../svg/language-java.svg';

export interface ILanguageJavaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanguageJavaIcon: FC<ILanguageJavaIconProps> = memo(props => {
  return <LanguageJavaSvg {...props} />;
});
