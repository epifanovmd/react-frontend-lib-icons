import React, { FC, memo } from 'react';
import LanguageMarkdownSvg from '../svg/language-markdown.svg';

export interface ILanguageMarkdownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanguageMarkdownIcon: FC<ILanguageMarkdownIconProps> = memo(props => {
  return <LanguageMarkdownSvg {...props} />;
});
