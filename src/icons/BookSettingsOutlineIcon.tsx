import React, { FC, memo } from 'react';
import BookSettingsOutlineSvg from '../svg/book-settings-outline.svg';

export interface IBookSettingsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookSettingsOutlineIcon: FC<IBookSettingsOutlineIconProps> = memo(props => {
  return <BookSettingsOutlineSvg {...props} />;
});
