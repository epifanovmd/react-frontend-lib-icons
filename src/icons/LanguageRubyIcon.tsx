import React, { FC, memo } from 'react';
import LanguageRubySvg from '../svg/language-ruby.svg';

export interface ILanguageRubyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanguageRubyIcon: FC<ILanguageRubyIconProps> = memo(props => {
  return <LanguageRubySvg {...props} />;
});
