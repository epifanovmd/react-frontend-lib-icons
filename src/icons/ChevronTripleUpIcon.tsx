import React, { FC, memo } from 'react';
import ChevronTripleUpSvg from '../svg/chevron-triple-up.svg';

export interface IChevronTripleUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronTripleUpIcon: FC<IChevronTripleUpIconProps> = memo(props => {
  return <ChevronTripleUpSvg {...props} />;
});
