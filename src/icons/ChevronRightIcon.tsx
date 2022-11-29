import React, { FC, memo } from 'react';
import ChevronRightSvg from '../svg/chevron-right.svg';

export interface IChevronRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronRightIcon: FC<IChevronRightIconProps> = memo(props => {
  return <ChevronRightSvg {...props} />;
});
