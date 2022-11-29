import React, { FC, memo } from 'react';
import ChevronDownBoxSvg from '../svg/chevron-down-box.svg';

export interface IChevronDownBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronDownBoxIcon: FC<IChevronDownBoxIconProps> = memo(props => {
  return <ChevronDownBoxSvg {...props} />;
});
