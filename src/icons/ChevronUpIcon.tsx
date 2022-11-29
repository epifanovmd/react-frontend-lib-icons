import React, { FC, memo } from 'react';
import ChevronUpSvg from '../svg/chevron-up.svg';

export interface IChevronUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronUpIcon: FC<IChevronUpIconProps> = memo(props => {
  return <ChevronUpSvg {...props} />;
});
