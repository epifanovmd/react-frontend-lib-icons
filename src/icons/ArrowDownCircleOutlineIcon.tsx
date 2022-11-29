import React, { FC, memo } from 'react';
import ArrowDownCircleOutlineSvg from '../svg/arrow-down-circle-outline.svg';

export interface IArrowDownCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowDownCircleOutlineIcon: FC<IArrowDownCircleOutlineIconProps> = memo(props => {
  return <ArrowDownCircleOutlineSvg {...props} />;
});
