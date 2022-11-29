import React, { FC, memo } from 'react';
import BookSettingsSvg from '../svg/book-settings.svg';

export interface IBookSettingsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BookSettingsIcon: FC<IBookSettingsIconProps> = memo(props => {
  return <BookSettingsSvg {...props} />;
});
