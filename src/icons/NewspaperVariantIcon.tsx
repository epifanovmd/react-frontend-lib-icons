import React, { FC, memo } from 'react';
import NewspaperVariantSvg from '../svg/newspaper-variant.svg';

export interface INewspaperVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NewspaperVariantIcon: FC<INewspaperVariantIconProps> = memo(props => {
  return <NewspaperVariantSvg {...props} />;
});
