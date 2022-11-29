import React, { FC, memo } from 'react';
import BookOpenVariantSvg from '../svg/book-open-variant.svg';

export interface IBookOpenVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookOpenVariantIcon: FC<IBookOpenVariantIconProps> = memo(props => {
  return <BookOpenVariantSvg {...props} />;
});
