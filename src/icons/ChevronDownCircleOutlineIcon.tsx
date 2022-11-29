import React, { FC, memo } from 'react';
import ChevronDownCircleOutlineSvg from '../svg/chevron-down-circle-outline.svg';

export interface IChevronDownCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronDownCircleOutlineIcon: FC<IChevronDownCircleOutlineIconProps> = memo(props => {
  return <ChevronDownCircleOutlineSvg {...props} />;
});
