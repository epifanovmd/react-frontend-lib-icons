import React, { FC, memo } from 'react';
import BookAlphabetSvg from '../svg/book-alphabet.svg';

export interface IBookAlphabetIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookAlphabetIcon: FC<IBookAlphabetIconProps> = memo(props => {
  return <BookAlphabetSvg {...props} />;
});
