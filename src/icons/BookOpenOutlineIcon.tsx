import React, { FC, memo } from 'react';
import BookOpenOutlineSvg from '../svg/book-open-outline.svg';

export interface IBookOpenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookOpenOutlineIcon: FC<IBookOpenOutlineIconProps> = memo(props => {
  return <BookOpenOutlineSvg {...props} />;
});
