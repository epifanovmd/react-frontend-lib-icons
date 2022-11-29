import React, { FC, memo } from 'react';
import ChevronRightBoxSvg from '../svg/chevron-right-box.svg';

export interface IChevronRightBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ChevronRightBoxIcon: FC<IChevronRightBoxIconProps> = memo(props => {
  return <ChevronRightBoxSvg {...props} />;
});
