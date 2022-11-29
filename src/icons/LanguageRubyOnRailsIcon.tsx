import React, { FC, memo } from 'react';
import LanguageRubyOnRailsSvg from '../svg/language-ruby-on-rails.svg';

export interface ILanguageRubyOnRailsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanguageRubyOnRailsIcon: FC<ILanguageRubyOnRailsIconProps> = memo(props => {
  return <LanguageRubyOnRailsSvg {...props} />;
});
