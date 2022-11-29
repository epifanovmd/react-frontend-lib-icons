import React, { FC, memo } from 'react';
import ChevronTripleRightSvg from '../svg/chevron-triple-right.svg';

export interface IChevronTripleRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronTripleRightIcon: FC<IChevronTripleRightIconProps> = memo(props => {
  return <ChevronTripleRightSvg {...props} />;
});
