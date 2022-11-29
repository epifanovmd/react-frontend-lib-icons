import React, { FC, memo } from 'react';
import ChevronRightCircleOutlineSvg from '../svg/chevron-right-circle-outline.svg';

export interface IChevronRightCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronRightCircleOutlineIcon: FC<IChevronRightCircleOutlineIconProps> = memo(props => {
  return <ChevronRightCircleOutlineSvg {...props} />;
});
