import React, { FC, memo } from 'react';
import TextSearchVariantSvg from '../svg/text-search-variant.svg';

export interface ITextSearchVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TextSearchVariantIcon: FC<ITextSearchVariantIconProps> = memo(props => {
  return <TextSearchVariantSvg {...props} />;
});
