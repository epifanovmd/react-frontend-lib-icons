import React, { FC, memo } from 'react';
import LanguageRSvg from '../svg/language-r.svg';

export interface ILanguageRIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanguageRIcon: FC<ILanguageRIconProps> = memo(props => {
  return <LanguageRSvg {...props} />;
});
