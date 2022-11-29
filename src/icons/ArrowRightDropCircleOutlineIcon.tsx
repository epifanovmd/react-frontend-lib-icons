import React, { FC, memo } from 'react';
import ArrowRightDropCircleOutlineSvg from '../svg/arrow-right-drop-circle-outline.svg';

export interface IArrowRightDropCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowRightDropCircleOutlineIcon: FC<IArrowRightDropCircleOutlineIconProps> = memo(props => {
  return <ArrowRightDropCircleOutlineSvg {...props} />;
});
