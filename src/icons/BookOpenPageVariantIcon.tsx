import React, { FC, memo } from 'react';
import BookOpenPageVariantSvg from '../svg/book-open-page-variant.svg';

export interface IBookOpenPageVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookOpenPageVariantIcon: FC<IBookOpenPageVariantIconProps> = memo(props => {
  return <BookOpenPageVariantSvg {...props} />;
});
