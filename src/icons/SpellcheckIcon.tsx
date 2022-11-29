import React, { FC, memo } from 'react';
import SpellcheckSvg from '../svg/spellcheck.svg';

export interface ISpellcheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SpellcheckIcon: FC<ISpellcheckIconProps> = memo(props => {
  return <SpellcheckSvg {...props} />;
});
