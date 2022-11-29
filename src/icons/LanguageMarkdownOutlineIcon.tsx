import React, { FC, memo } from 'react';
import LanguageMarkdownOutlineSvg from '../svg/language-markdown-outline.svg';

export interface ILanguageMarkdownOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanguageMarkdownOutlineIcon: FC<ILanguageMarkdownOutlineIconProps> = memo(props => {
  return <LanguageMarkdownOutlineSvg {...props} />;
});
