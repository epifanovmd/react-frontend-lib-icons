import React, { FC, memo } from 'react';
import ChevronDownSvg from '../svg/chevron-down.svg';

export interface IChevronDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronDownIcon: FC<IChevronDownIconProps> = memo(props => {
  return <ChevronDownSvg {...props} />;
});
