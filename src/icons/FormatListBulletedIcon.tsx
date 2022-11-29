import React, { FC, memo } from 'react';
import FormatListBulletedSvg from '../svg/format-list-bulleted.svg';

export interface IFormatListBulletedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatListBulletedIcon: FC<IFormatListBulletedIconProps> = memo(props => {
  return <FormatListBulletedSvg {...props} />;
});
