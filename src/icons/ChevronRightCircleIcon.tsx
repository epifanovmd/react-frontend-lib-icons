import React, { FC, memo } from 'react';
import ChevronRightCircleSvg from '../svg/chevron-right-circle.svg';

export interface IChevronRightCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronRightCircleIcon: FC<IChevronRightCircleIconProps> = memo(props => {
  return <ChevronRightCircleSvg {...props} />;
});
