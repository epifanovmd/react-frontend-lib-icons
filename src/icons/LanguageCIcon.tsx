import React, { FC, memo } from 'react';
import LanguageCSvg from '../svg/language-c.svg';

export interface ILanguageCIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanguageCIcon: FC<ILanguageCIconProps> = memo(props => {
  return <LanguageCSvg {...props} />;
});
