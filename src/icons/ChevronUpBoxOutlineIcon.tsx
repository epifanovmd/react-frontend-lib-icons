import React, { FC, memo } from 'react';
import ChevronUpBoxOutlineSvg from '../svg/chevron-up-box-outline.svg';

export interface IChevronUpBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronUpBoxOutlineIcon: FC<IChevronUpBoxOutlineIconProps> = memo(props => {
  return <ChevronUpBoxOutlineSvg {...props} />;
});
