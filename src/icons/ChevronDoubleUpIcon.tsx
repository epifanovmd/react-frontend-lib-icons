import React, { FC, memo } from 'react';
import ChevronDoubleUpSvg from '../svg/chevron-double-up.svg';

export interface IChevronDoubleUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronDoubleUpIcon: FC<IChevronDoubleUpIconProps> = memo(props => {
  return <ChevronDoubleUpSvg {...props} />;
});
