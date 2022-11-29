import React, { FC, memo } from 'react';
import TranslateVariantSvg from '../svg/translate-variant.svg';

export interface ITranslateVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TranslateVariantIcon: FC<ITranslateVariantIconProps> = memo(props => {
  return <TranslateVariantSvg {...props} />;
});
