import React, { FC, memo } from 'react';
import BookVariantSvg from '../svg/book-variant.svg';

export interface IBookVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookVariantIcon: FC<IBookVariantIconProps> = memo(props => {
  return <BookVariantSvg {...props} />;
});
