import React, { FC, memo } from 'react';
import BookInformationVariantSvg from '../svg/book-information-variant.svg';

export interface IBookInformationVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookInformationVariantIcon: FC<IBookInformationVariantIconProps> = memo(props => {
  return <BookInformationVariantSvg {...props} />;
});
