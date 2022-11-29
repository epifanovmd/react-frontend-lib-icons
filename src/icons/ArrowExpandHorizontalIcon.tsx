import React, { FC, memo } from 'react';
import ArrowExpandHorizontalSvg from '../svg/arrow-expand-horizontal.svg';

export interface IArrowExpandHorizontalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowExpandHorizontalIcon: FC<IArrowExpandHorizontalIconProps> = memo(props => {
  return <ArrowExpandHorizontalSvg {...props} />;
});
