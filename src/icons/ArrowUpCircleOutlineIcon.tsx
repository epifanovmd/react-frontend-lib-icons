import React, { FC, memo } from 'react';
import ArrowUpCircleOutlineSvg from '../svg/arrow-up-circle-outline.svg';

export interface IArrowUpCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ArrowUpCircleOutlineIcon: FC<IArrowUpCircleOutlineIconProps> = memo(props => {
  return <ArrowUpCircleOutlineSvg {...props} />;
});
