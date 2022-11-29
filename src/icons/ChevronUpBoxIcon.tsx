import React, { FC, memo } from 'react';
import ChevronUpBoxSvg from '../svg/chevron-up-box.svg';

export interface IChevronUpBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronUpBoxIcon: FC<IChevronUpBoxIconProps> = memo(props => {
  return <ChevronUpBoxSvg {...props} />;
});
