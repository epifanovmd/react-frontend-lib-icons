import React, { FC, memo } from 'react';
import ChevronRightBoxOutlineSvg from '../svg/chevron-right-box-outline.svg';

export interface IChevronRightBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronRightBoxOutlineIcon: FC<IChevronRightBoxOutlineIconProps> = memo(props => {
  return <ChevronRightBoxOutlineSvg {...props} />;
});
