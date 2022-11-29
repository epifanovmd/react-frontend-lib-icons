import React, { FC, memo } from 'react';
import BookOpenPageVariantOutlineSvg from '../svg/book-open-page-variant-outline.svg';

export interface IBookOpenPageVariantOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookOpenPageVariantOutlineIcon: FC<IBookOpenPageVariantOutlineIconProps> = memo(props => {
  return <BookOpenPageVariantOutlineSvg {...props} />;
});
