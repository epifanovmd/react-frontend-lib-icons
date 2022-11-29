import React, { FC, memo } from 'react';
import ChevronDoubleRightSvg from '../svg/chevron-double-right.svg';

export interface IChevronDoubleRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronDoubleRightIcon: FC<IChevronDoubleRightIconProps> = memo(props => {
  return <ChevronDoubleRightSvg {...props} />;
});
