import React, { FC, memo } from 'react';
import ChevronTripleDownSvg from '../svg/chevron-triple-down.svg';

export interface IChevronTripleDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronTripleDownIcon: FC<IChevronTripleDownIconProps> = memo(props => {
  return <ChevronTripleDownSvg {...props} />;
});
