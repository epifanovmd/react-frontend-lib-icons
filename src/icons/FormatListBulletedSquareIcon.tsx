import React, { FC, memo } from 'react';
import FormatListBulletedSquareSvg from '../svg/format-list-bulleted-square.svg';

export interface IFormatListBulletedSquareIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatListBulletedSquareIcon: FC<IFormatListBulletedSquareIconProps> = memo(props => {
  return <FormatListBulletedSquareSvg {...props} />;
});
