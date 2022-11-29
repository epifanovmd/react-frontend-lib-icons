import React, { FC, memo } from 'react';
import LanguageGoSvg from '../svg/language-go.svg';

export interface ILanguageGoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanguageGoIcon: FC<ILanguageGoIconProps> = memo(props => {
  return <LanguageGoSvg {...props} />;
});
