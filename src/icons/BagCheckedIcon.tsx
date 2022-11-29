import React, { FC, memo } from 'react';
import BagCheckedSvg from '../svg/bag-checked.svg';

export interface IBagCheckedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BagCheckedIcon: FC<IBagCheckedIconProps> = memo(props => {
  return <BagCheckedSvg {...props} />;
});
