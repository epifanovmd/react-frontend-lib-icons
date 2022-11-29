import React, { FC, memo } from 'react';
import FormatListBulletedTriangleSvg from '../svg/format-list-bulleted-triangle.svg';

export interface IFormatListBulletedTriangleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FormatListBulletedTriangleIcon: FC<IFormatListBulletedTriangleIconProps> = memo(props => {
  return <FormatListBulletedTriangleSvg {...props} />;
});
