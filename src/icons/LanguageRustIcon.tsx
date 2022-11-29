import React, { FC, memo } from 'react';
import LanguageRustSvg from '../svg/language-rust.svg';

export interface ILanguageRustIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanguageRustIcon: FC<ILanguageRustIconProps> = memo(props => {
  return <LanguageRustSvg {...props} />;
});
