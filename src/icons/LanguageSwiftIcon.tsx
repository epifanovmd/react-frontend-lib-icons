import React, { FC, memo } from 'react';
import LanguageSwiftSvg from '../svg/language-swift.svg';

export interface ILanguageSwiftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanguageSwiftIcon: FC<ILanguageSwiftIconProps> = memo(props => {
  return <LanguageSwiftSvg {...props} />;
});
