import React, { FC, memo } from 'react';
import LanguageJavascriptSvg from '../svg/language-javascript.svg';

export interface ILanguageJavascriptIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanguageJavascriptIcon: FC<ILanguageJavascriptIconProps> = memo(props => {
  return <LanguageJavascriptSvg {...props} />;
});
