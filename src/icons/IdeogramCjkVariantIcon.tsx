import React, { FC, memo } from 'react';
import IdeogramCjkVariantSvg from '../svg/ideogram-cjk-variant.svg';

export interface IIdeogramCjkVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const IdeogramCjkVariantIcon: FC<IIdeogramCjkVariantIconProps> = memo(props => {
  return <IdeogramCjkVariantSvg {...props} />;
});
