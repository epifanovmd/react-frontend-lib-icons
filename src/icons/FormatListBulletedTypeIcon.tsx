import React, { FC, memo } from 'react';
import FormatListBulletedTypeSvg from '../svg/format-list-bulleted-type.svg';

export interface IFormatListBulletedTypeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatListBulletedTypeIcon: FC<IFormatListBulletedTypeIconProps> = memo(props => {
  return <FormatListBulletedTypeSvg {...props} />;
});
