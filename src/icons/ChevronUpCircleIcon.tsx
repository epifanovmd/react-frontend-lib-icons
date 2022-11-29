import React, { FC, memo } from 'react';
import ChevronUpCircleSvg from '../svg/chevron-up-circle.svg';

export interface IChevronUpCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronUpCircleIcon: FC<IChevronUpCircleIconProps> = memo(props => {
  return <ChevronUpCircleSvg {...props} />;
});
