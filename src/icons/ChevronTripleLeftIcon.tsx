import React, { FC, memo } from 'react';
import ChevronTripleLeftSvg from '../svg/chevron-triple-left.svg';

export interface IChevronTripleLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronTripleLeftIcon: FC<IChevronTripleLeftIconProps> = memo(props => {
  return <ChevronTripleLeftSvg {...props} />;
});
