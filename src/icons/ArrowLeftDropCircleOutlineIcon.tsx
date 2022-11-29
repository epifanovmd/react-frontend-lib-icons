import React, { FC, memo } from 'react';
import ArrowLeftDropCircleOutlineSvg from '../svg/arrow-left-drop-circle-outline.svg';

export interface IArrowLeftDropCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowLeftDropCircleOutlineIcon: FC<IArrowLeftDropCircleOutlineIconProps> = memo(props => {
  return <ArrowLeftDropCircleOutlineSvg {...props} />;
});
