import React, { FC, memo } from 'react';
import BookOpenBlankVariantSvg from '../svg/book-open-blank-variant.svg';

export interface IBookOpenBlankVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookOpenBlankVariantIcon: FC<IBookOpenBlankVariantIconProps> = memo(props => {
  return <BookOpenBlankVariantSvg {...props} />;
});
