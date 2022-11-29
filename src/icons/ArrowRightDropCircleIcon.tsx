import React, { FC, memo } from 'react';
import ArrowRightDropCircleSvg from '../svg/arrow-right-drop-circle.svg';

export interface IArrowRightDropCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowRightDropCircleIcon: FC<IArrowRightDropCircleIconProps> = memo(props => {
  return <ArrowRightDropCircleSvg {...props} />;
});
