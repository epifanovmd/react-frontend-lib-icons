import React, { FC, memo } from 'react';
import ChevronDownBoxOutlineSvg from '../svg/chevron-down-box-outline.svg';

export interface IChevronDownBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronDownBoxOutlineIcon: FC<IChevronDownBoxOutlineIconProps> = memo(props => {
  return <ChevronDownBoxOutlineSvg {...props} />;
});
