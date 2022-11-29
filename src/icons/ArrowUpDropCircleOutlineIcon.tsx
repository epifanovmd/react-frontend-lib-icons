import React, { FC, memo } from 'react';
import ArrowUpDropCircleOutlineSvg from '../svg/arrow-up-drop-circle-outline.svg';

export interface IArrowUpDropCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUpDropCircleOutlineIcon: FC<IArrowUpDropCircleOutlineIconProps> = memo(props => {
  return <ArrowUpDropCircleOutlineSvg {...props} />;
});
