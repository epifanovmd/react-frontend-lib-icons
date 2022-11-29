import React, { FC, memo } from 'react';
import ArrowDownDropCircleOutlineSvg from '../svg/arrow-down-drop-circle-outline.svg';

export interface IArrowDownDropCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDownDropCircleOutlineIcon: FC<IArrowDownDropCircleOutlineIconProps> = memo(props => {
  return <ArrowDownDropCircleOutlineSvg {...props} />;
});
